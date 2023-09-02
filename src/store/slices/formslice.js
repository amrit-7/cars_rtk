import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: "",
  },
  reducers: {
    changeCarName(state, action) {
      state.name = action.payload;
    },
    changeCarCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      (state.name = ""), (state.cost = "");
    });
  },
});

export const { changeCarCost, changeCarName } = formSlice.actions;

export const formReducer = formSlice.reducer;
