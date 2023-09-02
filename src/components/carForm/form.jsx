// import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeCarName, changeCarCost, addCar } from "../../store/store.js";
import Button from "../button/Button.jsx";
import "./carForm.styles.css";
const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleChangeName = (e) => {
    dispatch(changeCarName(e.target.value));
  };
  const handleChangeCost = (e) => {
    const number = parseInt(e.target.value);
    dispatch(changeCarCost(number));
  };
  const handleCarSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle">Add Car</h4>
      <form onSubmit={handleCarSubmit}>
        <div className="form-group">
          <div className="form-field">
            <label className="label" htmlFor="">
              Name
            </label>
            <input
              type="text"
              onChange={handleChangeName}
              className="input-field"
              value={name}
            />
          </div>
          <div className="form-field">
            <label className="label" htmlFor="">
              Cost
            </label>
            <input
              type="number"
              onChange={handleChangeCost}
              className="input-field"
              value={cost || ""}
            />
          </div>
          <Button type="submit" className="form-button">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
