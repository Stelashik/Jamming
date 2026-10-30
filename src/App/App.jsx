import { useState } from 'react'
import './App.css'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'
import { searchTracks } from '../Utils/LastFm'

export default function App() {
  const [searchResult, setSearchResult] = useState([])

   const [playList, setPlayList] = useState({
    playlist_name: "Test Playlist",
    playlist_tracks: []
  })

  const handleSearch = async (query) => {
    try {
        const tracks = await searchTracks(query)

        const newTracks = tracks.map((track) => {
            return {
                id: track.mbid || track.url,
                name: track.name,
                artist: track.artist
            }
        })

        setSearchResult(newTracks)
    } catch (error) {
        console.error('Search failed:', error)
    }
}

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

  const removeTrack = (remove_track) => {
    setPlayList((prev) => {
      const updatedPlaylist = prev.playlist_tracks.filter( track => track.id !== remove_track.id)

      return {
        ...prev,
        playlist_tracks: updatedPlaylist
      }
    })
  }

  const playlistNameChange = (newPlaylistName) => {
    setPlayList((prev) => {
      return {
        ...prev,
        playlist_name: newPlaylistName
      }
    })
  }


  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults tracks={searchResult} onAddSong={addSongToPlayList} />
      <Playlist playlist={playList} onRemove={removeTrack} changeName={playlistNameChange} />
    </div>
  )
}


