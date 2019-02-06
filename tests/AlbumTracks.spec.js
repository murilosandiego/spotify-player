import 'jsdom-global/register'
import { expect } from 'chai'
import renderAlbumTracks from '../src/AlbumTrack'
import convertToHumanTime from '../src/ConvertToHumanTime'

describe('AlbumTracks', () => {
  it('should exist', () => {
    expect(renderAlbumTracks).to.exist
  })

  it('should to be a function', () => {
    expect(renderAlbumTracks).to.be.a('function')
  })

  const data = [
    {
      'preview_url': 'https://p.scdn.co/mp3-preview/8c75f39a807a47ea0b0bee9328864e4d1f1610e8?cid=774b29d4f13844c495f206cafdad9c86',
      'track_number': 1,
      'duration_ms': 198733,
      'name': 'Há Tempos'
    },
    {
      'preview_url': 'https://p.scdn.co/mp3-preview/8c75f39a807a47ea0b0bee9328864e4d1f1610e8?cid=774b29d4f13844c495f206cafdad9c88',
      'track_number': 2,
      'duration_ms': 198744,
      'name': 'Dois'
    }
  ]

  const markup = `
    <div class="music" data-track-preview="${data[0].preview_url}">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${convertToHumanTime(data[0].duration_ms)}</p>
    </div>
    <div class="music" data-track-preview="${data[1].preview_url}">
      <p class="music-number">${data[1].track_number}</p>
      <p class="music-title">${data[1].name}</p>
      <p class="music-duration">${convertToHumanTime(data[1].duration_ms)}</p>
    </div>`

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div')
    renderAlbumTracks(data, element)

    expect(element.innerHTML).to.be.eql(markup)
  })
})
