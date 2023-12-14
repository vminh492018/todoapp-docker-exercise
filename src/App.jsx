import "./App.css";
import Header from "./components/HeaderApp";
import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  //Check complete event
  const isCompletedTodo = (id) => {

    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  function generateId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  
  const addTodo = (text) => {
    const obj = {
      id: generateId(),
      text,
      completed: false,
    };
    setTodos([...todos, obj])
  }
  return (
    <div className="container mx-auto py-8">
      <Header />
      <main className="grid grid-cols-12">
        <div className="col-span-12 mb-8">
          <ToDoForm saveTodo={addTodo} />
        </div>
        <div className="col-span-12">
          <TodoList
            todos={todos}
            isCompletedTodo={isCompletedTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </main>
    </div>
  );
}
