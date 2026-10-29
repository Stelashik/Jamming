import './Track.css'

export default function Track(props) {
    return (
        <div>
            {props.track.name}
            {props.track.artist}
            {props.track.album}
        </div>
    )
}