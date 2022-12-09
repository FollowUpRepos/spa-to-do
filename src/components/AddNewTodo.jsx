import { useRef } from "react";

const AddNewTodo = (props) => {
  const inputRef = useRef(null); // {current: <input />}

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodoText = inputRef.current.value;
    props.handleAddTodo(newTodoText);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} className="todo-form">
      <label className="input-item">
        <input type="text" name="todo" ref={inputRef} />
      </label>
      <input type="submit" className="btn" value="Add" />
    </form>
  );
};

export default AddNewTodo;
