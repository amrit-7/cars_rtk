import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="panel">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className="subtitle">My Cars</h2>
        <input
          placeholder="Search for Cars"
          onChange={handleSearch}
          className="input-field"
        />
      </div>
    </div>
  );
};
export default CarSearch;
