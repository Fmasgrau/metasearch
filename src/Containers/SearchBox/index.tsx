import React from 'react'
import Button from '../../Components/Button'

export default function SearchBox(): JSX.Element {
    const onSubmit = (): void => {
        console.log('Submit button')
    }

    return <Button onClick={onSubmit}>Submit</Button>
}
