import axios from "axios"

// I put there just for testing purposes for the reviewer. It's sensible and vulnerable information here.
const BING_KEY = '095b83c3c7954874b4212b9227c3c442'
const GOOGLE_KEY = 'AIzaSyAuYucO0jCa1lYfWd235tyJRxb8aGVGKUI'
const GOOGLE_CX = '4cf935c13c0e105dc'

export const BingApi = axios.create({
    baseURL: "https://api.bing.microsoft.com",
    headers: {
        "Content-type": "application/json",
        'Ocp-Apim-Subscription-Key': BING_KEY
    }
})


export const GoogleSearchApi = axios.create({
    baseURL: "https://customsearch.googleapis.com/customsearch",
    headers: {
        "Content-type": "application/json",
    },
    params: {
        key: GOOGLE_KEY,
        cx: GOOGLE_CX
    }
})