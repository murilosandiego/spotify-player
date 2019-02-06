import spotify from './Spotify'
import renderAlbumInfo from './AlbumInfo'
import renderAlbumTracks from './AlbumTrack'

const albumInfo = document.getElementById('album-info')
const trackList = document.getElementById('track-list')
const listAlbuns = document.getElementById('album-list')

function makeRequest (albumId) {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, trackList))
}

export default function searchTrigger () {
  listAlbuns.addEventListener('click', e => {
    const target = e.target
    makeRequest(target.getAttribute('data-album-id'))
  })
}
