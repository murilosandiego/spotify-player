import spotify from './Spotify'
import renderAlbums from './AlbumList'

const albumList = document.getElementById('album-list')
const searchInput = document.getElementById('search-input')
const searchForm = document.getElementById('search-form')

function makeRequest (artist) {
  spotify.search.albums(artist)
    .then(data => renderAlbums(data.albums.items, albumList))
}
export default function searchTrigger () {
  searchForm.addEventListener('submit', e => {
    e.preventDefault()
    makeRequest(searchInput.value)
  })
}
