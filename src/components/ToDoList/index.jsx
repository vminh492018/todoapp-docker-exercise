import React, { useState, useEffect } from "react";

const all = "all",
  visible = "visible",
  completed = "completed";

const options = {
  [all]: "All",
  [visible]: "to do",
  [completed]: "Done",
};

const TodoList = ({ todos, isCompletedTodo, deleteTodo }) => {
  const [optionTodos, setOptionTodos] = useState([]);
  const [optionName, setOptionName] = useState(all);
  const [showTrash, setShowTrash] = useState(null);

  function filterTodosByOption(optionName) {
    let result;
    switch (optionName) {
      case completed:
        console.log(`getIsCompletedTodos() was called times`);
        result = todos.filter((todo) => todo.completed);
        break;

      case visible:
        console.log(`getVisibleTodos() was called times`);
        result = todos.filter((todo) => !todo.completed);
        break;

      case all:
        console.log(`getTodos() was called times`);
        result = todos;
        break;
      default:
        throw new Error(`Unknown option: ${optionName}`);
    }
    return result;
  }
  useEffect(() => {
    console.log(optionName);
    const currentTodos = filterTodosByOption(optionName);
    setOptionTodos(currentTodos);
  }, [todos, optionName]);

  return (
    <div className="rounded-lg bg-yellow-100 p-8 border-1 shadow-md mx-auto task-list">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold text-yellow-700">List:</p>
        <select
          name="mode"
          className="text-md border-2 border-yellow-600 p-1 rounded-lg"
          onChange={(e) => setOptionName(e.target.value)}
        >
          {Object.keys(options).map((item, i) => (
            <option key={i} value={item}>
              {options[item]}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-12">
        {optionTodos.length === 0 ? (
          <div className="col-span-12">
            <div className="mt-5 flex items-center justify-between cursor-pointer">
              <p className="text-2xl font-semibold text-yellow-600 text-todo">
                Nothing to do!
              </p>
            </div>
          </div>
        ) : (
          optionTodos.map(({ id, text, completed }) => (
            <div key={id} className="col-span-12">
              <div
                className="mt-5 flex items-center justify-between border-b border-yellow-200 cursor-pointer"
                onMouseEnter={() => setShowTrash(id)}
                onMouseLeave={() => setShowTrash(null)}
              >
                <p
                  onClick={() => isCompletedTodo(id)}
                  className={`text-2xl duration-200 w-full text-todo ${
                    completed ? "line-through text-gray-400" : ""
                  }`}
                  data-testid="todo-text"
                >
                  {text}
                </p>
                <svg
                  className={`svg-inline--fa fa-trash fa-w-14 duration-150 ${
                    showTrash === id ? "text-yellow-600 block" : "hidden"
                  }`}
                  onClick={() => deleteTodo(id)}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
                  ></path>
                </svg>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
