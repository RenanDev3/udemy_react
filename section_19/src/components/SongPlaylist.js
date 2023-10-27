import React from 'react'

import {createRandomSong} from '../data'

function SongPlaylist() {
    const songPlaylist = []

    function handleAddSong(song){

    }

    function handleRemoveSong(song) {

    }

    const renderedSongs = songPlaylist.map((song) => {
        return (
            <li key={song}>
                {song}
                <button
                    onClick={() => handleRemoveSong(song)}
                    className='button is-danger'
                >
                    X
                </button>
            </li>
        )
    })

  return (
    <div className="content">
    <div className="table-header">
      <h3 className="subtitle is-3">Song Playlist</h3>
      <div className="buttons">
        <button
          onClick={() => handleAddSong(createRandomSong())}
          className="button is-link"
        >
          + Add Song to Playlist
        </button>
      </div>
    </div>
    <ul>{renderedSongs}</ul>
  </div>
  )
}

export default SongPlaylist