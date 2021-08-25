import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { useAppSelector } from '../../Redux/hooks'
import CoverPhoto from '../../Assets/coverphotocanvas.png'

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
            <main className="container">
                <div className="d-flex justify-content-center mt-2">
                    <img src={CoverPhoto} alt="coverphoto" width="100%" />
                </div>
                <div className="row d-flex justify-content-center">
                    {header}
                </div>
                <div className="row mb-3 d-flex justify-content-center">
                    {body}
                </div>
            </main>
        </LoadingOverlay>
    )
}
