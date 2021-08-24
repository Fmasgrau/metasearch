/* eslint-disable react/button-has-type */
import React from 'react'

export default function Button({
    type,
    onClick,
    children,
    disabled,
    className,
    onKeyDown,
    name,
}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={className}
                disabled={disabled}
                onKeyDown={onKeyDown}
                name={name}
            >
                {children}
            </button>
        </>
    )
}
