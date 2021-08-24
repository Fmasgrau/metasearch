
export interface IGetImages {
    query: string
}

export interface IValueResponse {
    thumbnailUrl: string,
    name: string
}

export interface IBingResponse {
    value: IValueResponse[]
}