import { useState } from 'react'
import './App.css'
import SearchResults from '../SearchResults/SearchResults'

export default function App() {
  const [searchResult, setSearchResult] = useState([
    {
      name: "Faint",
      artist: "Linkin Park",
      album: "Meteora",
      id: "1"
    },

    {
      name: "Riot",
      artist: "Three Days Grace",
      album: "One-X",
      id: "2"
    },

    {
      name: "Monster",
      artist: "Skillet",
      album: "Awake",
      id: "3"
    }
  ])

  return (
    <div>
      <SearchResults tracks={searchResult} />
    </div>
  )
}


