import React, { useState } from 'react'
import Button from '../../Components/Button'
import DropDown from '../../Components/Dropdown'
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
            <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                    <i className="fas fa-search h4 text-body" />
                </div>
                <div className="col">
                    <SearchBar
                        name="search"
                        type="search"
                        placeholder="Search..."
                        onChange={handleChangeSearch}
                        value={searchValue}
                    />
                </div>

                <div className="col-auto">
                    <DropDown
                        options={[
                            { id: 'Google', name: 'Google' },
                            { id: 'Bing', name: 'Bing' },
                            { id: 'Both', name: 'Both' },
                        ]}
                        onSelectChange={handleSelect}
                    />
                </div>

                <div className="col-auto">
                    <Button onClick={onSubmit}>Submit</Button>
                </div>
            </div>
        </>
    )
}
