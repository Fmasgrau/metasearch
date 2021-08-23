import { configureStore } from '@reduxjs/toolkit'
import SearchBarReducer from './Reducers/SearchBox/SearchBoxReducer'
import ResultTableReducer from './Reducers/ResultTable/ResultTableReducer'

const store = configureStore({
    reducer: {
        searchbox: SearchBarReducer,
        resulttable: ResultTableReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store