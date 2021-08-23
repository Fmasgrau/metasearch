import React from 'react'
import ItemList from '../../Components/ItemList'
import { useAppSelector } from '../../Redux/hooks'

export default function ResultTable(): JSX.Element {
    const Items = useAppSelector((state) => state.resulttable.list)

    const GoogleItems = useAppSelector(
        (state) => state.resulttable.googleImages
    )

    const showItems = Items.map((res) => (
        <ItemList url={res.thumbnailUrl} alt={res.name} />
    ))

    const showGoogleItems = GoogleItems.map((response) => (
        <ItemList url={response?.image?.thumbnailLink} alt={response.title} />
    ))

    return (
        <>
            <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
                Results:
            </h1>
            <br />
            <div className="row text-center text-lg-start">
                {showGoogleItems}
                {showItems}
            </div>
        </>
    )
}
