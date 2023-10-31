import {createSlice} from "@reduxjs/toolkit"

import { reset } from "../actions"

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

export const moviesReducer = moviesSlice.reducer
export const {addMovie, removeMovie} = moviesSlice.actions