import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const deleteUser = createAsyncThunk('users/delete', async(userId) => {
    console.log("async thunk users/delete")
    await axios.delete(`http://localhost:3005/users/${userId}`)

    await pause(1000)

    return userId
})

// DEV ONLY (debuging purposes)
function pause(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export { deleteUser }