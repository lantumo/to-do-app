import { useSelector } from "react-redux";

import "./todoList.css";

import ListItem from "./ListItem";
import { selectTodoList } from "../features/todoSlice";

const TodoList = () => {
  const todoList = useSelector(selectTodoList);
  return (
    <section className="todo-section">
      {todoList.length > 0 ? (
        todoList.map((todoItem) => (
          <ListItem key={todoItem.id} todoItem={todoItem} />
        ))
      ) : (
        <p className="quote">{'"run your day or your day will run you"'} </p>
      )}
    </section>
  );
};
export default TodoList;
