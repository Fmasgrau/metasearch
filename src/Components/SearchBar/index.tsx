import React from 'react'

interface ISearchBarProps {
    name: string
    type: string
    placeholder: string
    onChange: (data: any) => void
    value: string
}

export default function SearchBar({
    name,
    type,
    placeholder,
    onChange,
    value,
}: ISearchBarProps): JSX.Element {
    return (
        <>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className="form-control form-control-lg form-control-borderless"
            />
        </>
    )
}
