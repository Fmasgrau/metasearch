import React from 'react'

interface Options {
    id: number | string
    name: string
}

interface DropDownProps {
    onSelectChange: (value: string) => void
    options: Options[]
    id: string
    name: string
    classname?: string
    firstElement?: string
}

export default function DropDown({
    onSelectChange,
    options,
    id,
    name,
    classname,
    firstElement,
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
            id={id}
            name={name}
            className={classname}
            onChange={handleChange}
            aria-label={name}
        >
            <option>{firstElement}</option>
            {displayOptions}
        </select>
    )
}

DropDown.defaultProps = {
    classname: 'form-control form-control-lg form-control-borderless',
    firstElement: 'Select Item',
}
