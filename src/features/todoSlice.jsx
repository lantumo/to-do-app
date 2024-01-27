import { createSlice } from "@reduxjs/toolkit";

const todoList =
  localStorage.getItem("todoList") !== null
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];
const initialState = { todoList: todoList, done: false, id: null };
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
      localStorage.setItem(
        "todoList",
        JSON.stringify(state.todoList.map((todo) => todo))
      );
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload.id
      );
    },
    setCheck(state, action) {
      state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.done = true;
        }
      });
    },
    FilterCompleted(state, action) {
      state.todoList = todoList.todoList.filter((item) =>
        action.payload === "true" ? !item.done : item.done
      );
    },
  },
});
export const selectTodoList = (state) => state.todo.todoList;
export const { addTodo, removeTodo, setCheck, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
