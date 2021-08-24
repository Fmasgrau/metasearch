export interface IGetImages {
    query: string
}

export interface IImageResponse {
    thumbnailLink: string
}

export interface IValueResponse {
    image: IImageResponse,
    title: string
}

export interface IGoogleResponse {
    items: IValueResponse[]
}