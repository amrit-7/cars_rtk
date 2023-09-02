import { Fragment } from "react";
import CarForm from "./components/carForm/form";
import CarList from "./components/carlist";
import CarSearch from "./components/carsearch";
import CarTotal from "./components/carTotal";

const App = () => {
  return (
    <Fragment>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarTotal />
    </Fragment>
  );
};

export default App;
