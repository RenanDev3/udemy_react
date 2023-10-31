import React from "react";
import {useDispatch} from 'react-redux'

import { reset } from "./store";
import MoviePlaylist from "./components/MoviePlaylist"
import SongPlaylist from "./components/SongPlaylist"

function App(){
  const dispatch = useDispatch()

    function handleResetClick(){
      dispatch(reset())
    } 

    return (
        <div className="container is-fluid">
        <button onClick={() => handleResetClick()} className="button is-danger">
          Reset Both Playlists
        </button>
        <hr />
        <MoviePlaylist />
        <hr />
        <SongPlaylist />
      </div>   
    )
}

export default App