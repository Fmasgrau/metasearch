import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import ProviderForTest from './Helpers/ProviderForTest'

test('renders learn react link', () => {
    render(
        <ProviderForTest>
            <App />
        </ProviderForTest>
    )
})
