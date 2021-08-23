import { createAsyncThunk } from '@reduxjs/toolkit'
import { RESULT_TABLE_BING_FETCH_IMAGES, RESULT_TABLE_GOOGLE_FETCH_IMAGES } from '../../types'

import * as BingServices from '../../../Services/bing.service'
import * as GoogleServices from '../../../Services/googlesearch.service'

interface IGetImages {
    query: string
}

export const fetchBingImages = createAsyncThunk(RESULT_TABLE_BING_FETCH_IMAGES, async (query: IGetImages) => {
    const { value } = await BingServices.getImages(query)
    return value
})

export const fetchingGoogleImages = createAsyncThunk(RESULT_TABLE_GOOGLE_FETCH_IMAGES, async (query: IGetImages) => {
    const { items } = await GoogleServices.getImagesFromGoogle(query)
    return items
})