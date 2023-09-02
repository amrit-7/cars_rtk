import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/store";
const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return {
      cars: filteredCars,
      name: form.name,
    };
  });
  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  console.log(
    "🚀 ~ file: carlist.jsx:13 ~ const{cars,name}=useSelector ~ cars:",
    cars
  );

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase);
    console.log("🚀 ~ file: carlist.jsx:20 ~ renderedCars ~ bold:", bold);

    return (
      <div key={car.id} className={`panel list `}>
        <p className={`${bold && "bold"}`}>
          {car.name} - ${car.cost}
        </p>
        <button onClick={() => handleDelete(car)} className="deleteButton">
          Delete
        </button>
      </div>
    );
  });
  return <div className="car-list">{renderedCars}</div>;
};
export default CarList;
