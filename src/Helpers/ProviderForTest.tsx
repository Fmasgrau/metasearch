import React from 'react'
import { Provider } from 'react-redux'
import store from '../Redux/store'

interface IProviderForTestProps {
    children: JSX.Element | JSX.Element[]
}

export default function ProviderForTest({
    children,
}: IProviderForTestProps): JSX.Element {
    return <Provider store={store}>{children}</Provider>
}
