/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import { render } from '@testing-library/react'

import ProviderForTest from '../../Helpers/ProviderForTest'
import ResultTable from '.'

describe('ResultTable', () => {
    it('Should render with none data', () => {
        render(
            <ProviderForTest>
                <ResultTable />
            </ProviderForTest>
        )
        const div = document.querySelector('div')
        expect(div).toBeEmptyDOMElement()
    })
})
