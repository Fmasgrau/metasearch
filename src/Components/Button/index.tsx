/* eslint-disable react/button-has-type */
import React from 'react'

export default function Button({
    type,
    onClick,
    children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return (
        <>
            <button type={type} onClick={onClick}>
                {children}
            </button>
        </>
    )
}
