import * as rm from 'typed-rest-client/RestClient';
import {Feed} from "./models/feed";
import {Page} from "./models/page";

class Market {
    rest: rm.RestClient

    constructor(baseURL: string = "https://market.link", userAgent: string = 'flux-link-withdrawal') {
        this.rest = new rm.RestClient(userAgent, baseURL)
    }

    async getFeeds(page: number, size: number = 20, networkId: number = 1): Promise<Page<Feed[]>> {
        const response: rm.IRestResponse<Page<Feed[]>> = await this.rest.get<Page<Feed[]>>('/v1/feeds/', {
            queryParameters: {
                params: {
                    "networkId": networkId,
                    "page": page
                }
            }
        })
        return response.result
    }
}

export {
    Market
}
