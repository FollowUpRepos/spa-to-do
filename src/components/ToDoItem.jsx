export const ToDoItem = ({ item, handleChange, done }) => {
  const onClickHandler = () => {
    handleChange(item.text);
  };

  const icon = done ? "↻" : "✓"

  return (
    <div className="todo-item">
      <p>{item.text}</p>
      <div className="actions">
        <button className="btn" onClick={onClickHandler}>
          {icon}
        </button>
      </div>
    </div>
  );
};
