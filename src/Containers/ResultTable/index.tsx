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

    // const fakeItems = FakeItems.items.map((response) => (
    //     <ItemList url={response?.image?.thumbnailLink} alt={response.title} />
    // ))

    const showGoogleItems = GoogleItems.map((response) => (
        <ItemList url={response?.image?.thumbnailLink} alt={response.title} />
    ))

    return (
        <>
            <div className="row text-center text-lg-start">
                {showGoogleItems}
                {showItems}
            </div>
        </>
    )
}
