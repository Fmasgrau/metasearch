import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { useAppSelector } from '../../Redux/hooks'

interface ILayoutProps {
    header: JSX.Element
    body: JSX.Element
}

export default function Layout({ header, body }: ILayoutProps): JSX.Element {
    const isLoadingSelector = useAppSelector(
        (state) => state.resulttable.isLoading
    )

    return (
        <LoadingOverlay
            active={isLoadingSelector}
            spinner={<PacmanLoader size={50} color="yellow" />}
            className="vh-100"
        >
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {header}
                </div>
                <div className="row mb-3 d-flex justify-content-center">
                    {body}
                </div>
            </div>
        </LoadingOverlay>
    )
}
