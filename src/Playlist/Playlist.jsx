import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist'

export default function Playlist({ playlist, onRemove, changeName }) {
    return (
        <div>
            <input value={playlist.playlist_name} onChange={(event) => changeName(event.target.value)}/>
            <Tracklist tracks={playlist.playlist_tracks} onRemove={onRemove} />
        </div>
    )
}