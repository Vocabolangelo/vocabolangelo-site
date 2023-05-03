import React, { useState } from 'react'
import HandleProps from '../props/HandleProps'

export default function SearchBar(props: HandleProps<string>) {
    const [searchTerm, setSearchTerm] = useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value)
        props.handle(event.target.value)
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Cerca" value={searchTerm} onChange={handleInputChange} />
        </div>
    )
}
