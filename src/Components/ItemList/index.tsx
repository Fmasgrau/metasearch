import React from 'react'

interface IItemListProps {
    url: string
    alt: string
}

export default function ItemList({ url, alt }: IItemListProps): JSX.Element {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-6">
                <div className="d-block mb-4 h-100">
                    <img
                        className="img-fluid img-thumbnail"
                        src={url}
                        alt={alt}
                    />
                </div>
            </div>
        </>
    )
}
