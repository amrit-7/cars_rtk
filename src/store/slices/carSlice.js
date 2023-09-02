import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updatedCars = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updatedCars;
    },
  },
});
export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;
