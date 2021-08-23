/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { fetchBingImages, fetchingGoogleImages } from '../../Actions/ResultTable/ResultTableAction'


// Define a type for the slice state
interface IImageResponse {
    thumbnailLink: string
}

interface IGoogleResponse {
    image: IImageResponse,
    title: string
}
interface IValueResponse {
    thumbnailUrl: string,
    name: string
}
interface SearchBoxState {

    list: IValueResponse[],
    googleImages: IGoogleResponse[]
}

// Define the initial state using that type
const initialState: SearchBoxState = {
    list: [],
    googleImages: []
}

const searchbarReducer = createReducer<SearchBoxState>(initialState, builder =>
    builder
        .addCase(fetchBingImages.fulfilled, (state, action) => {
            state.list = action.payload
        })
        .addCase(fetchingGoogleImages.fulfilled, (state, action) => {
            state.googleImages = action.payload
        })
)

export default searchbarReducer
