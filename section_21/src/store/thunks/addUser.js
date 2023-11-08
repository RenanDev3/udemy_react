import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker"
import axios from "axios";

const addUser = createAsyncThunk('users/add', async () =>{
    const userToAdd = {
        name: faker.person.fullName()
    }

    const response = await axios.post("http://localhost:3005/users", userToAdd)

    await pause(1000)

    return response.data
})

// DEV ONLY (debuging purposes)
function pause(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export { addUser }