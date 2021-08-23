import axios from "axios"

const BING_KEY = '095b83c3c7954874b4212b9227c3c442'

export const BingApi = axios.create({
    baseURL: "https://api.bing.microsoft.com",
    headers: {
        "Content-type": "application/json",
        'Ocp-Apim-Subscription-Key': BING_KEY
    }
})