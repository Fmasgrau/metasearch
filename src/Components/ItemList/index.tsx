import React from 'react'
import './index.css'

interface IItemListProps {
    url: string
    alt: string
}

export default function ItemList({ url, alt }: IItemListProps): JSX.Element {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-6" id="card">
                <div className="h-100 d-flex justify-content-center p-3">
                    <img src={url} alt={alt} className="img-thumbnail" />
                </div>
            </div>
        </>
    )
}
