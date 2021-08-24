/* eslint-disable react/no-array-index-key */
import React from 'react'
import ItemList from '../../Components/ItemList'
import { useAppSelector } from '../../Redux/hooks'

export default function ResultTable(): JSX.Element {
    const Items = useAppSelector((state) => state.resulttable.list)

    const GoogleItems = useAppSelector(
        (state) => state.resulttable.googleImages
    )

    const showItems = Items.map((res, index) => (
        <ItemList
            url={res.thumbnailUrl}
            alt={res.name}
            key={`${index}${res.name}`}
        />
    ))

    const showGoogleItems = GoogleItems.map((response, index) => (
        <ItemList
            url={response?.image?.thumbnailLink}
            alt={response.title}
            key={response.title + index}
        />
    ))

    return (
        <>
            {showGoogleItems}
            {showItems}
        </>
    )
}
