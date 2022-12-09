export const ToDoItem = ({ item, updateItem, done }) => {
  // The updateItem function simply toggles the value of
  // item.done between true and false. It works just the
  // same way for both toDos and toBeDones

  const onClickHandler = () => {
    updateItem(item.text);
  };

  // Use UNICODE characters for the arrows
  const icon = done ? "↻" : "✓"

  return (
    <div className="todo-item">
      <p>{item.text}</p>
      <div className="actions">
        <button
          className="btn"
          onClick={onClickHandler}
        >
          {icon}
        </button>
      </div>
    </div>
  );
};
