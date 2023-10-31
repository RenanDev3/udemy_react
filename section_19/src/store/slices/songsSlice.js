import { createSlice } from "@reduxjs/toolkit"

import { reset } from "../actions"

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

export const songsReducer = songsSlice.reducer
export const {addSong, removeSong} = songsSlice.actions