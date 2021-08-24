import React from 'react'

interface IHeaderProps {
    searchBar: JSX.Element
    dropDown: JSX.Element
    button: JSX.Element
}

export default function Header({
    searchBar,
    dropDown,
    button,
}: IHeaderProps): JSX.Element {
    return (
        <div className="card-body row no-gutters d-flex justify-content-center border rounded mt-4 mx-2">
            <div className="row">
                <div className="col-9 col-md-11 col-sm-10">{searchBar}</div>
                <div className="col-3 col-md-1 col-sm-2 d-flex justify-content-center">
                    {button}
                </div>
            </div>
            <div className="row">
                <div className="col-9 col-md-11 col-sm-10 mt-2">{dropDown}</div>
            </div>
        </div>
    )
}
