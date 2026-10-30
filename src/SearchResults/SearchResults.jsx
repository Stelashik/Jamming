import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

export default function SearchResults(props) {
    return (
        <div>
            <Tracklist tracks={props.tracks} onAddSong={props.onAddSong} />
        </div>
    )
}