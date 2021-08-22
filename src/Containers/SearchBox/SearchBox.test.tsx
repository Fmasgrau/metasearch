import React from 'react'
import { screen, render, fireEvent, cleanup } from '@testing-library/react'
import SearchBox from '.'

afterEach(cleanup)

describe('SearchBox', () => {
    it('must render SearchBox component', () => {
        render(<SearchBox />)
    })
    it('must render button component with type submit and label submit', () => {
        // const button = screen.getByRole('Button')
    })
})
