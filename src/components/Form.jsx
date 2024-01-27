import "./form.css";
import addIcon from "../assets/plus.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    if (input.length > 0) {
      dispatch(addTodo({ id: new Date().toISOString(), input }));
    }
    setInput("");
  }
  return (
    <div className="form">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="i want to ..."
        className="input"
      />
      <button onClick={handleClick} className="btn-add">
        <img src={addIcon} alt="plus sign icon" />
      </button>
    </div>
  );
};
export default Form;
