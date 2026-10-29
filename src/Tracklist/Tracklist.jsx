import './Tracklist.css'
import Track from '../Track/Track'

export default function Tracklist(props) {
    return (
        <div>
            {props.tracks.map((track) => {
                return (
                    <div key={track.id}>
                        <Track track={track} />
                    </div>
                )
            })}
        </div>
    )
}