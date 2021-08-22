/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { screen, render } from '@testing-library/react'

import Button from '.'

beforeEach(() => render(<Button />))

describe('Button', () => {
    it('Should render a button', () => {
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('Should have text', () => {
        render(<Button>Submit</Button>)
        const linkElement = screen.getByText(/Submit/i)
        expect(linkElement).toBeInTheDocument()
    })
})
