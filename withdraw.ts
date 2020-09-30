import {ethers} from "ethers";

import {Feed} from "./client/models/feed";
import {Market} from "./client/market";
import {log} from "./logger";
import {fluxAggregatorAbi} from "./abi";

const market = new Market()

const walletAddress = process.env.WALLET_ADDRESS || "0x501698a6f6f762c79e4d28e3815c135e3f9af996"
const rpcUrl = process.env.RPC_URL || "http://localhost:8545"
const privateKey = process.env.PRIVATE_KEY || ""
const withdrawTo = process.env.WITHDRAW_TO || ""
const withdrawThreshold = process.env.WITHDRAW_THRESHOLD || "0.0"

const gasPrice = process.env.GAS_PRICE || 20000000000 // 20 Gwei
const txOptions = {gasPrice: gasPrice}

let matchedFeeds = new Map()

async function scanFeeds(walletAddress: string, batchSize = 20): Promise<Feed[]> {
    const page = await market.getFeeds(1, 0)
    const totalCount = page.totalCount

    const matchedFeeds: Feed[] = []
    const totalPage = Math.ceil(totalCount / batchSize)
    for (let i = 1; i <= totalPage; i++) {
        const feedPage = await market.getFeeds(i, batchSize)
        matchedFeeds.push(...matchFeeds(walletAddress, feedPage.data))
    }

    return matchedFeeds
}

function matchFeeds(walletAddress: string, feeds: Feed[]): Feed[] {
    const matchedFeeds: Feed[] = []
    feeds.forEach(function (feed) {
        feed.walletAddresses?.forEach(value => {
            if (value.toLowerCase() === walletAddress.toLowerCase()) {
                matchedFeeds.push(feed)
            }
        })
    })
    return matchedFeeds
}

function newWallet(privateKey: string, rpcUrl: string): ethers.Wallet {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
    return new ethers.Wallet(privateKey, provider)
}

async function withdrawFromFeed(feed: Feed, wallet: ethers.Wallet) {
    if (!matchedFeeds[feed.contractAddress.toString()]) {
        matchedFeeds[feed.contractAddress.toString()] = true
    } else {
        log.info("Trying to withdraw on a feed already been withdrawn from, skipping")
        return
    }

    const feedContract = new ethers.Contract(feed.contractAddress.toString(), fluxAggregatorAbi, wallet)
    const withdrawableAmount = await feedContract.withdrawablePayment(walletAddress)
    const parsedWithdrawThreshold = ethers.utils.parseEther(withdrawThreshold)

    if (withdrawableAmount.lt(parsedWithdrawThreshold)) {
        log.info("Withdrawable amount is not greater than threshold of " + parsedWithdrawThreshold + ", skipping")
        return
    }

    log.info("Withdrawing amount " + withdrawableAmount + " LINK from feed " + feed.contractAddress + ", to " + withdrawTo)
    await feedContract.withdrawPayment(walletAddress, withdrawTo, withdrawableAmount, txOptions)
}

async function run() {
    if (withdrawTo.length == 0 || privateKey.length == 0) {
        log.error("PRIVATE_KEY or WITHDRAW_TO isn't set", null)
        process.exit(1)
    }

    log.info("Scanning market.link for feeds")
    const feeds = await scanFeeds(walletAddress)
    log.info("Matched " + feeds.length + " feeds, performing withdrawals")

    const wallet = newWallet(privateKey, rpcUrl)
    for (const feed of feeds) {
        await withdrawFromFeed(feed, wallet)
    }

    log.info("Done")
}

run()
