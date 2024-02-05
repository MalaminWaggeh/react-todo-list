import { useReducer } from "react";
import { initialState } from "./data/todosData";
import { todosReducer } from "./reducers/todosReducer";
import TodosList from "./components/TodosList";
import "./styles.css";

export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodosList todos={todos} dispatch={dispatch} />
    </div>
  );
}
