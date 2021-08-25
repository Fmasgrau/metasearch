import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
import { RESULT_TABLE_BING_FETCH_IMAGES, RESULT_TABLE_GOOGLE_FETCH_IMAGES, RESULT_TABLE_IS_SEARCHING } from '../../types'
import * as BingServices from '../../../Services/bing.service'
import * as GoogleServices from '../../../Services/googlesearch.service'


interface IGetImages {
    query: string
}

export const fetchBingImages = createAsyncThunk(RESULT_TABLE_BING_FETCH_IMAGES, async (query: IGetImages) => {
    try {
        const { value } = await BingServices.getImages(query)

        return value
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Bing',
            text: 'Something went wrong!',
            footer: 'Please try again!'
        })
        return []
    }
})

export const fetchingGoogleImages = createAsyncThunk(RESULT_TABLE_GOOGLE_FETCH_IMAGES, async (query: IGetImages) => {
    try {
        const { items } = await GoogleServices.getImagesFromGoogle(query)

        return items
    }
    catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Google',
            text: 'Something went wrong!',
            footer: 'Please try again!'
        })
        return []
    }
})

export const isSearching = createAction(RESULT_TABLE_IS_SEARCHING)