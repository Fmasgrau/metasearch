import { BingApi } from "./api"
import { IGetImages, IBingResponse } from "../Entities/bingservices"

export const getImages = async ({ query }: IGetImages): Promise<IBingResponse> => {

    const { data: results } = await BingApi.get<IBingResponse>(`/v7.0/images/search?q=${query}`)
    return results
}

