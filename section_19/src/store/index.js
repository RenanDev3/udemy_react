import {configureStore} from "@reduxjs/toolkit"

import { reset } from "./actions"
import { songsReducer, addSong, removeSong } from "./slices/songsSlice"
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice"

// determines the key for each piece of state, in the e.g. below: "songs" and "movies" are the keys
const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
})

export { store }
export { reset }
export {addMovie, removeMovie, addSong, removeSong}