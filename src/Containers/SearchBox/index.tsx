/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import Button from '../../Components/Button'
import DropDown from '../../Components/Dropdown'
import Header from '../../Components/Header'
import SearchBar from '../../Components/SearchBar'
import { useAppSelector, useAppDispatch } from '../../Redux/hooks'
import {
    searchText,
    itemSelected,
} from '../../Redux/Actions/SearchBox/SearchBoxAction'
import {
    fetchBingImages,
    fetchingGoogleImages,
    isSearching,
} from '../../Redux/Actions/ResultTable/ResultTableAction'
import SearchIcon from '../../Assets/SearchIcon'

export default function SearchBox(): JSX.Element {
    const [isDisableButton, setIsDisableButton] = useState(true)

    const dispatch = useAppDispatch()

    const textFromSearchBox = useAppSelector(
        (state) => state.searchbox.searchText
    )

    const itemSelectedFromSearchBox = useAppSelector(
        (state) => state.searchbox.itemSelected
    )

    useEffect(() => {
        if (
            itemSelectedFromSearchBox !== '' &&
            textFromSearchBox !== '' &&
            itemSelectedFromSearchBox !== 'Select Item'
        ) {
            setIsDisableButton(false)
        } else {
            setIsDisableButton(true)
        }
    }, [textFromSearchBox, itemSelectedFromSearchBox])

    const onSubmit = (): void => {
        dispatch(isSearching())
        if (itemSelectedFromSearchBox === 'Bing') {
            dispatch(fetchBingImages({ query: textFromSearchBox }))
        } else if (itemSelectedFromSearchBox === 'Google') {
            dispatch(fetchingGoogleImages({ query: textFromSearchBox }))
        } else if (itemSelectedFromSearchBox === 'Both') {
            dispatch(fetchBingImages({ query: textFromSearchBox }))
            dispatch(fetchingGoogleImages({ query: textFromSearchBox }))
        }
    }

    const handleSelect = (event: any): void => {
        dispatch(itemSelected(event))
    }

    const handleChangeSearch = (event: any): void => {
        dispatch(searchText(event.target.value))
    }

    return (
        <>
            <Header
                searchBar={
                    <SearchBar
                        name="search"
                        type="search"
                        placeholder="Search images"
                        onChange={handleChangeSearch}
                        value={textFromSearchBox}
                    />
                }
                dropDown={
                    <DropDown
                        options={[
                            { id: 'Google', name: 'Google' },
                            { id: 'Bing', name: 'Bing' },
                            { id: 'Both', name: 'Both' },
                        ]}
                        onSelectChange={handleSelect}
                    />
                }
                button={
                    <Button
                        onClick={onSubmit}
                        disabled={isDisableButton}
                        className="btn btn-sm bg-primary"
                    >
                        <SearchIcon className="w-100 h-100" color="white" />
                    </Button>
                }
            />
        </>
    )
}
