import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist'

export default function Playlist({ playlist }) {
    return (
        <div>
            {playlist.playlist_name}
            <Tracklist tracks={playlist.playlist_tracks} />
        </div>
    )
}