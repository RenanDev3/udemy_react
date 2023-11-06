import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker"
import axios from "axios";

const addUser = createAsyncThunk('users/add', async () =>{
    const userToAdd = {
        name: faker.person.fullName()
    }

    const response = await axios.post("http://localhost:3005/users", userToAdd)

    return response.data
})

export { addUser }