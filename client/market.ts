import * as rm from 'typed-rest-client/RestClient';
import {Feed} from "./models/feed";
import {Page} from "./models/page";

class Market {
    rest: rm.RestClient

    constructor(baseURL = "https://market.link", userAgent = 'flux-link-withdrawal') {
        this.rest = new rm.RestClient(userAgent, baseURL)
    }

    async getFeeds(page: number, size = 20, networkId = 1): Promise<Page<Feed[]>> {
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
