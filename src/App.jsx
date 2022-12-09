import { useState } from "react";
import "./scss/App.scss";
import Navigation from "./components/Navigation";
import ToDosContainer from "./components/ToDosContainer";

function App() {
  const tasks = [
    { text: "Vacuuming", done: false },
    { text: "Homework", done: false },
    { text: "Understanding use state?!", done: false },
    { text: "Wake Up", done: true },
    { text: "Have 6 coffees", done: true },
    { text: "Lunch", done: true },
    { text: "Shop for christmas presents", done: false },
  ];

  const [items, setItems] = useState(tasks);

  const updateItem = (todoText) => {
    // todoText = "vaccuming"

    // iterate through prev state
    // if text == previouse state text
    // console.log(todoText);

    // react schedules updating of state

    // { text: "Shop for christmas presents", done: false } -> ... -> text: "Shop for christmas presents", done: false

    setItems((previousState) => {
      console.log("previous state -> ", previousState);
      console.log("items -> ", items);
      return previousState.map((task) =>
        task.text === todoText ? { ...task, done: !task.done } : task
      );
    });
  };

  // let output = [];
  // for (const task of previousState) {
  //   output.push(
  //     task.text === todoText ? { text: todoText, done: !task.done } : task
  //   );
  // }
  // return output;

  // in object, when I have two keys that are the same, the most recent key will be added and the other will be discarded
  // in array, if i add a new item that is identical to a previous item, they will both be added

  const addItem = (value) => {
    const newItem = { text: value, done: false };
    setItems((previousState) => [...previousState, newItem]);
  };

  const toDos = items.filter((item) => !item.done);
  const toDones = items.filter((item) => item.done);

  return (
    <div className="app">
      <Navigation />
      <ToDosContainer
        items={toDos}
        handleAddTodo={addItem}
        handleChange={updateItem}
      />
      <ToDosContainer
       done={true}
       items={toDones}
       handleChange={updateItem} />
    </div>
  );
}

export default App;
