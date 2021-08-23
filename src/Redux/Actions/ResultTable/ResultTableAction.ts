import { createAsyncThunk } from '@reduxjs/toolkit'
import { RESULT_TABLE_FETCH_ALL } from '../../types'

import * as BingServices from '../../../Services/bing.service'

interface IGetImages {
    query: string
}

export const fetchBingImages = createAsyncThunk(RESULT_TABLE_FETCH_ALL, async (query: IGetImages) => {
    const { value } = await BingServices.getImages(query)
    return value
})