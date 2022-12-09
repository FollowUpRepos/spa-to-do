// need todos to loop over and display
// we need some sort of JSX to display each todo

import AddNewTodo from "./AddNewTodo";
import { ToDoItem } from "./ToDoItem";

const ToDosContainer = ({items, updateItem, addItem, done}) => {
  // addItem and done may be undefined
  
  //   console.log("todos container props ->", props);
  // props = {items: [text...]}

  // [<div key=div1>.....</div>, <div key=div2>..... </div>]

  const toDoItems = items.map((item) => (
    <ToDoItem
      key={item.text}
      item={item}
      done={done}
      updateItem={updateItem}
    />
  ));

  // Determine the title and the presence of the AddNewTodo
  // component, depending on the props that were passed
  const title = done ? "Backlog" : "To Do"
  const AddToDo = addItem
                ? <AddNewTodo addItem={addItem} />
                : ""

  return (
    <div className="todos-container">
      {AddToDo}

      <div className="todos">
        <h3>{title}</h3>
        {items.length > 0 && toDoItems}
      </div>
    </div>
  );
};

export default ToDosContainer;
