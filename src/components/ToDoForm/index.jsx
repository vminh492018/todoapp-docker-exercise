// import useInputState from "../../states/useInputState";

import { useState }  from "react";

const ToDoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value)
  }
  const reset = () => { setValue("")}
  return (
    <form
      className="grid grid-cols-12 gap-2 mx-auto"
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <div className="col-span-10">
        <input
          className="w-full rounded-lg border-1 text-md p-3 h-12 bg-white border-yellow-400 border-2 focus:outline-none active:outline-none focus:border-yellow-600 active:border-yellow-600"
          name="todoText"
          placeholder="Enter a task name..."
          aria-label="Todo Text"
          value={value}
          onChange={onChange}
          data-testid="todo-text-input"
        />
      </div>
      <div className="col-span-2">
        <button
          className="rounded-lg p-3 bg-green-500 w-full flex align-center justify-center text-white font-bold h-full hover:bg-green-400 hover:shadow-md"
          type="submit"
          aria-label="Add Todo"
          data-testid="add-todo-button"
        >
          <svg className="svg-inline--fa fa-plus fa-w-14 fa-lg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
