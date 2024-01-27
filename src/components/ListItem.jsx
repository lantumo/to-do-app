import { useDispatch } from "react-redux";

import { removeTodo, setCheck } from "../features/todoSlice";
import "./listItem.css";
import propTypes from "prop-types";
import deleteIcon from "../assets/delete.png";
import checkIcon from "../assets/check.png";

const ListItem = ({ todoItem }) => {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeTodo({ id }));
  }
  function handleCheck(id) {
    dispatch(setCheck({ id }));
  }
  return (
    <div className="list-container">
      <div>
        <h3
          className="title"
          style={todoItem.done && { textDecoration: "line-through" }}
        >
          {todoItem.input.slice(0, 10)}...
        </h3>

        <ul className="discription">
          <li
            className="discription-list"
            style={todoItem.done && { textDecoration: "line-through" }}
          >
            {todoItem.input}
          </li>
        </ul>
      </div>
      <div className="icons-container">
        {!todoItem.done && (
          <button
            onClick={() => handleCheck(todoItem.id)}
            className="check-btn"
          >
            <img
              src={checkIcon}
              alt="delete icon"
              className="icon check-icon"
            />
          </button>
        )}
        <button
          onClick={() => handleDelete(todoItem.id)}
          className="delete-btn"
        >
          <img
            src={deleteIcon}
            alt="delete icon"
            className="icon delete-icon"
          />
        </button>
      </div>
      {todoItem.done && (
        <span className="done">
          <p>done</p>
        </span>
      )}
    </div>
  );
};

ListItem.propTypes = {
  todoItem: propTypes.objectOf(propTypes.string, propTypes.bool).isRequired,
};
export default ListItem;
