import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(query)
    }   

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search songs..."
            />

            <button type="submit">Search</button>
        </form>
    )
}