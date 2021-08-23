/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { isDisabled, searchText, itemSelected } from '../../Actions/SearchBox/SearchBoxAction'


// Define a type for the slice state
interface SearchBoxState {
  isDisabled: boolean,
  itemSelected: string,
  searchText: string
}

// Define the initial state using that type
const initialState: SearchBoxState = {
  isDisabled: true,
  itemSelected: '',
  searchText: ''
}

const searchbarReducer = createReducer<SearchBoxState>(initialState, builder =>
  builder
    .addCase(isDisabled, (state, action) => {
      state.isDisabled = action.payload
    })
    .addCase(searchText, (state, action) => {
      state.searchText = action.payload
    })
    .addCase(itemSelected, (state, action) => {
      state.itemSelected = action.payload
    })
)

export default searchbarReducer
