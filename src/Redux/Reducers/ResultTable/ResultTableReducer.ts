/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { fetchBingImages, fetchingGoogleImages, isSearching } from '../../Actions/ResultTable/ResultTableAction'


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

    bingImages: IValueResponse[],
    googleImages: IGoogleResponse[],
    isLoading: boolean
}

// Define the initial state using that type
const initialState: SearchBoxState = {
    bingImages: [],
    googleImages: [],
    isLoading: false
}

const searchbarReducer = createReducer<SearchBoxState>(initialState, builder =>
    builder
        .addCase(fetchBingImages.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchBingImages.rejected, (state) => {
            state.isLoading = false
        })
        .addCase(fetchBingImages.fulfilled, (state, action) => {
            state.bingImages = action.payload
            state.isLoading = false
        })
        .addCase(fetchingGoogleImages.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchingGoogleImages.rejected, (state) => {
            state.isLoading = false
        })
        .addCase(fetchingGoogleImages.fulfilled, (state, action) => {
            state.googleImages = action.payload
            state.isLoading = false
        })
        .addCase(isSearching, (state) => {
            state.googleImages = []
            state.bingImages = []
            state.isLoading = true
        })
)

export default searchbarReducer
