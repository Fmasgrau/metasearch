/* eslint-disable react/button-has-type */
import React from 'react'

export default function Button({
    type,
    onClick,
    children,
    disabled,
}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className="btn btn-lg btn-success"
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}
