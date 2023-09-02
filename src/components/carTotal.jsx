import { useSelector } from "react-redux";

const CarTotal = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filteredCars.reduce((acc, car) => {
      return acc + car.cost;
    }, 0);
  });
  console.log("🚀 ~ file: carTotal.jsx:12 ~ totalCost ~ totalCost:", totalCost);
  return (
    <div className="car-total">
      <h3>Total: ${totalCost}</h3>
    </div>
  );
};

export default CarTotal;
