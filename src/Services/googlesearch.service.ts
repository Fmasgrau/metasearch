import { GoogleSearchApi } from "./api"
import { IGetImages, IGoogleResponse } from "../Entities/googleservice"


export const getImagesFromGoogle = async ({ query }: IGetImages): Promise<IGoogleResponse> => {

    const { data: results } = await GoogleSearchApi.get<IGoogleResponse>('v1', { params: { q: query, searchType: 'image', num: 10 } })
    return results
}

