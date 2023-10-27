import React from "react";

import MoviePlaylist from "./components/MoviePlaylist"
import SongPlaylist from "./components/SongPlaylist"

function App(){
    function handleResetClick(){

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