import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="app">
      <h2 className="main-title">Redux-To-Do-App</h2>
      <div className="container">
        <Form />
        <Filter />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
