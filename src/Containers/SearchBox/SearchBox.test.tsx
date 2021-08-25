/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProviderForTest from '../../Helpers/ProviderForTest'
import SearchBox from '.'

beforeEach(() =>
    render(
        <ProviderForTest>
            <SearchBox />
        </ProviderForTest>
    )
)

describe('Searchbox', () => {
    describe('UI', () => {
        it('Must render a searchbox input', () => {
            const searchInput = screen.getByRole('searchbox')
            expect(searchInput).toBeInTheDocument()
        })
        it('Must render a submit button', () => {
            const submitButton = screen.getByRole('button')
            expect(submitButton).toBeInTheDocument()
        })
        it('Must render a combobox', () => {
            const comboBox = screen.getByRole('combobox')
            expect(comboBox).toBeInTheDocument()
        })
    })

    describe('Combobox', () => {
        it('Combobox must have items', () => {
            const itemsSelect = screen.getAllByRole('option')
            expect(itemsSelect).toHaveLength(4)
        })
    })

    describe('Button behavior', () => {
        it('Enabled when searchbox and selectitem are selected', () => {
            const submitButton = screen.getByRole('button')
            userEvent.type(screen.getByRole('searchbox'), 'Test')
            userEvent.selectOptions(screen.getByRole('combobox'), ['Bing'])

            expect(submitButton).toBeEnabled()
        })
        it('Disabled when searchbox has text and select item has not selected item', () => {
            const submitButton = screen.getByRole('button')
            userEvent.type(screen.getByRole('searchbox'), 'Test')
            userEvent.selectOptions(screen.getByRole('combobox'), [
                'Select Item',
            ])

            expect(submitButton).toBeDisabled()
        })

        it('Disabled when searchbox has not text and select item is selected', () => {
            const submitButton = screen.getByRole('button')
            userEvent.selectOptions(screen.getByRole('combobox'), [
                'Select Item',
            ])

            expect(submitButton).toBeDisabled()
        })

        it('Disabled when select and then deselect option', () => {
            const submitButton = screen.getByRole('button')
            userEvent.type(screen.getByRole('searchbox'), 'Test')
            userEvent.selectOptions(screen.getByRole('combobox'), ['Bing'])
            userEvent.selectOptions(screen.getByRole('combobox'), [
                'Select Item',
            ])

            expect(submitButton).toBeDisabled()
        })

        it('Disabled when type and then delete text', () => {
            const submitButton = screen.getByRole('button')
            userEvent.type(screen.getByRole('searchbox'), 'Test')
            userEvent.clear(screen.getByRole('searchbox'))
            userEvent.selectOptions(screen.getByRole('combobox'), ['Bing'])

            expect(submitButton).toBeDisabled()
        })
    })
})
