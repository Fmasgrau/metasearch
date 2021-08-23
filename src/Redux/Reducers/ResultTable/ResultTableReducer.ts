/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { fetchBingImages } from '../../Actions/ResultTable/ResultTableAction'


// Define a type for the slice state

interface IValueResponse {
    thumbnailUrl: string,
    name: string
}
interface SearchBoxState {

    list: IValueResponse[]
}

// Define the initial state using that type
const initialState: SearchBoxState = {
    list: []
}

const searchbarReducer = createReducer<SearchBoxState>(initialState, builder =>
    builder
        .addCase(fetchBingImages.fulfilled, (state, action) => {
            state.list = action.payload
        })
)

export default searchbarReducer
