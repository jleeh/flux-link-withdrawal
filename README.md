# Flux Aggregator Withdraw Tool
A simple TypeScript based CLI tool that allows you to automatically withdraw all earned LINK from FluxAggregator 
contracts. Discovery of the FluxAggregator contracts to withdraw is performed via [market.link](https://market.link), 
specifically the [/v1/feeds](https://market.link/v1/feeds) endpoint.

### Setup

```
npm i
yarn
```

### Configuration

| Variable Name  | Default                                    | Description                                                                                                                         |
|----------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| WALLET_ADDRESS | 0x501698a6f6f762c79e4d28e3815c135e3f9af996 | The Chainlink node wallet address that is added as the oracle within each deployed FluxAggregator.sol.                              |
| RPC_URL        | http://localhost:8545                      | The Ethereum JSON RPC url to use for querying and sending transactions on-chain.                                                    |
| PRIVATE_KEY    | null                                       | The private key of the admin wallet added within the deployed FluxAggregator.sol contracts, used to send the withdraw transactions. |
| WITHDRAW_TO    | null                                       | The Ethereum address to withdraw the earned LINK to.                                                                                |
| GAS_PRICE      | 20000000000                                | The gas price in wei to use when sending the withdraw transactions.                                                                 |
| WITHDRAW_THRESHOLD | 0.0                                    | The withdrawable threshold, any amount greater than this number will trigger a transaction.

### Run Locally

via npm:
```
WITHDRAW_TO="0x0" PRIVATE_KEY="0x0" npm run withdraw
```

via yarn:
```
WITHDRAW_TO="0x0" PRIVATE_KEY="0x0" yarn withdraw
```
