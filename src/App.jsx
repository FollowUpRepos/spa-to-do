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

  // `tasks` will be use to initialize the `items` variable.
  // It will be used only the first time this component is
  // rendered. Whenever setItems() is called, React will
  // store the new version of `items`, and then re-render
  // the component, using the new version of `items`. The
  // value of `tasks` will be ignored for these re-renders.
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
  const toBeDones = items.filter((item) => item.done);

  // Use the same components for both toDos and toBeDones.
  // The only differences are:
  // + The component used for the toDos will have an addItem
  //   function as a prop
  // + The component used for the toBeDones will have a done
  //   property, set to true
  // The presence or absence of these props will affect what
  // the ToDosContainer renders
  return (
    <div className="app">
      <Navigation />
      <ToDosContainer
        items={toDos}
        addItem={addItem}
        updateItem={updateItem}
      />
      <ToDosContainer
       done={true}
       items={toBeDones}
       updateItem={updateItem} />
    </div>
  );
}

export default App;
