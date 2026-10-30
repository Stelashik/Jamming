import { useState } from 'react'
import './App.css'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

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

   const [playList, setPlayList] = useState({
    playlist_name: "Test Playlist",
    playlist_tracks: []
  })

  const addSongToPlayList = (track) => {
    setPlayList((prev) => {
      const isAlreadyAdded = prev.playlist_tracks.some(song => song.id === track.id)

      if (isAlreadyAdded) {
        return prev
      }

      return {
        ...prev,
        playlist_tracks: [...prev.playlist_tracks, track]
      }
    })
  }


  return (
    <div>
      <SearchResults tracks={searchResult} onAddSong={addSongToPlayList} />
      <Playlist playlist={playList} />
    </div>
  )
}


