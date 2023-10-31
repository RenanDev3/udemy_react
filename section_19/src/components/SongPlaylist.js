import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createRandomSong } from '../data'
import { addSong, removeSong } from '../store'

function SongPlaylist() {
    const dispatch = useDispatch()
    const songPlaylist = useSelector((state) => state.songs) // useSelector receives all the state object

    function handleAddSong(song){

      dispatch(addSong(song)) // addSong(song) returns an object like {type: 'song/AddSong', payload: 'song content'}
    }

    function handleRemoveSong(song) {
      dispatch(removeSong(song))
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