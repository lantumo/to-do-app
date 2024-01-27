import "./filter.css";
import filterIcon from "../assets/adjust.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../features/todoSlice";

const Filter = () => {
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();
  function handleSelect(e) {
    setSelect(e.target.value);
    console.log(`${select} from wat`);
    dispatch(setFilter(select));
  }
  return (
    <div className="f-container">
      <img src={filterIcon} />
      <select onChange={handleSelect} className="select">
        <option value="false">active</option>
        <option value="true">completed</option>
      </select>
    </div>
  );
};

export default Filter;
