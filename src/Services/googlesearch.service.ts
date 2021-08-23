import { GoogleSearchApi } from "./api"

interface IGetImages {
    query: string
}

interface IImageResponse {
    thumbnailLink: string
}

interface IValueResponse {
    image: IImageResponse,
    title: string
}

interface IGoogleResponse {
    items: IValueResponse[]
}

export const getImagesFromGoogle = async ({ query }: IGetImages): Promise<IGoogleResponse> => {

    const { data: results } = await GoogleSearchApi.get<IGoogleResponse>('v1', { params: { q: query, searchType: 'image', num: 10 } })
    return results
}

