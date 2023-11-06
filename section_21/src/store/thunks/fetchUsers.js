import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const response = await axios.get("http://localhost:3005/users")

    // DEV ONLY (debuging purposes)
    await pause(1000)

    return response.data
})

// DEV ONLY (debuging purposes)
function pause(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}


export {fetchUsers}