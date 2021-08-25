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
    // eslint-disable-next-line
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
            className="form-control form-control-lg form-control-borderless"
            onChange={handleChange}
            aria-label="customSearch"
        >
            <option>Select Item</option>
            {displayOptions}
        </select>
    )
}
