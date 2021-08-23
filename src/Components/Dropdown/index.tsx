import React from 'react'

interface Options {
    id: number | string
    name: string
}

interface DropDownProps {
    onSelectChange: (value: string) => void
    options: Options[]
}

export default function DropDown({
    onSelectChange,
    options,
}: DropDownProps): JSX.Element {
    const handleChange = (event: any): void => {
        const selectedValue = event.target.value
        onSelectChange(selectedValue)
    }

    const displayOptions = options.map((data) => (
        <option key={data.id} value={data.id}>
            {data.name}
        </option>
    ))

    return (
        <select
            name="customSearch"
            className="custom-search-select"
            onChange={handleChange}
        >
            <option>Select Item</option>
            {displayOptions}
        </select>
    )
}
