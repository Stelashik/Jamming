import './Track.css'

export default function Track(props) {
    return (
        <div>
            {props.track.name}
            {props.track.artist}
            {props.track.album}
            {props.onAddSong && (<button onClick={() => props.onAddSong(props.track)}>+</button>)}
        </div>
    )
}