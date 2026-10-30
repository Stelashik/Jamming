import './Tracklist.css'
import Track from '../Track/Track'

export default function Tracklist({ tracks, onAddSong}) {
    return (
        <div>
            {tracks.map((track) => {
                return (
                    <div key={track.id}>
                        <Track track={track} onAddSong={onAddSong} />
                    </div>
                )
            })}
        </div>
    )
}