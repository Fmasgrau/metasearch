import { BingApi } from "./api"

interface IGetImages {
    query: string
}

interface IValueResponse {
    thumbnailUrl: string,
    name: string
}

interface IBingResponse {
    value: IValueResponse[]
}

export const getImages = async ({ query }: IGetImages): Promise<IBingResponse> => {

    const { data: results } = await BingApi.get<IBingResponse>(`/v7.0/images/search?q=${query}`)
    return results
}

