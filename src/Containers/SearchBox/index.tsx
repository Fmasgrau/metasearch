import React, { useState } from 'react'
import Button from '../../Components/Button'
import DropDown from '../../Components/Dropdown'
import Header from '../../Components/Header'
import SearchBar from '../../Components/SearchBar'

export default function SearchBox(): JSX.Element {
    const [searchValue, setSearchValue] = useState('')
    const [selectedValue, setSelectedValue] = useState('')

    const onSubmit = (): void => {
        console.log('Submit button', searchValue, selectedValue)
    }

    const handleSelect = (event: any): void => {
        setSelectedValue(event)
        console.log(event)
    }

    const handleChangeSearch = (event: any): void => {
        setSearchValue(event.target.value)
        console.log(event.target.value)
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
                        value={searchValue}
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
                button={<Button onClick={onSubmit}>Submit</Button>}
            />
        </>
    )
}
