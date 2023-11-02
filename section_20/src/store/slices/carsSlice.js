import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        removeCar(state, action){
            const filteredCars = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = filteredCars
        }
    }
})

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer