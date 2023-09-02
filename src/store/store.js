import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCarCost, changeCarName } from "./slices/formslice";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carSlice";
const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});
export {
  store,
  changeCarCost,
  changeCarName,
  addCar,
  removeCar,
  changeSearchTerm,
};
