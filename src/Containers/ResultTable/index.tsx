/* eslint-disable react/no-array-index-key */
import React from 'react'
import ItemList from '../../Components/ItemList'
import { useAppSelector } from '../../Redux/hooks'

export default function ResultTable(): JSX.Element {
    const bingItems = useAppSelector((state) => state.resulttable.bingImages)

    const googleItems = useAppSelector(
        (state) => state.resulttable.googleImages
    )

    const showBingItems = bingItems.map((res, index) => (
        <ItemList
            url={res.thumbnailUrl}
            alt={res.name}
            key={`${index}${res.name}`}
        />
    ))

    const showGoogleItems = googleItems.map((response, index) => (
        <ItemList
            url={response?.image?.thumbnailLink}
            alt={response.title}
            key={response.title + index}
        />
    ))

    return (
        <>
            {showGoogleItems}
            {showBingItems}
        </>
    )
}
