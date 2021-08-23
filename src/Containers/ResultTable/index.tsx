import React from 'react'
import ItemList from '../../Components/ItemList'

export default function ResultTable(): JSX.Element {
    return (
        <>
            <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
                Results:
            </h1>
            <br />
            <div className="row text-center text-lg-start">
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
            </div>
        </>
    )
}
