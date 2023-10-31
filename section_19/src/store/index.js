import {configureStore, createSlice, createAction} from "@reduxjs/toolkit"

const reset = createAction('app/reset')

const songsSlice = createSlice({
    name: 'songs',
    initialState: [],
    reducers: { // all the state that will be hold by the store is produced by these reducers
        addSong(state, action){
            state.push(action.payload)
        },
        removeSong(state, action){
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
        // reset(state, action){
        //     return []
        // }
    }, 
    extraReducers(builder){
        builder.addCase(reset, (state, action) => [])
    }
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload)
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action) => [])
    }
    // extraReducers(builder){
    //     builder.addCase(moviesSlice.actions.reset, (state, action) => [])
    // }
})

// determines the key for each piece of state, in the e.g. below: "songs" and "movies" are the keys
const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer,
    }
})

export { store, reset }
export const {addSong, removeSong} = songsSlice.actions
export const {addMovie, removeMovie} = moviesSlice.actions