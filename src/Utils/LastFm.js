const API_KEY = '9eec55ffaf5c408c7d02a2866e243f2a';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

export async function searchTracks(query) {

    if (!query.trim()) {
        return [];
    }

    const params = new URLSearchParams({
        method: 'track.search',
        track: query,
        api_key: API_KEY,
        format: 'json'
    });

    const url = `${BASE_URL}?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
        throw new Error(data.message);
    }

    return data.results?.trackmatches?.track ?? [];
}