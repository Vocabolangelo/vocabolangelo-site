import React, { useState } from 'react'

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value)
        props.onSearch(event.target.value)
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Cerca" value={searchTerm} onChange={handleInputChange} />
        </div>
    )
}
