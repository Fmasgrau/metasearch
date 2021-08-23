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
        <div className="card-body row no-gutters align-items-center">
            <div className="col-auto">
                <i className="fas fa-search h4 text-body" />
            </div>
            <div className="col">{searchBar}</div>

            <div className="col-auto">{dropDown}</div>

            <div className="col-auto">{button}</div>
        </div>
    )
}
