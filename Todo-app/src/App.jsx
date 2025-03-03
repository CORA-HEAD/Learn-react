import { useState } from "react";
import "./App.css";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import Todo from "./components/items";
import WelcomeMsg from "./components/Welcomemsg";
function App() {
  const itemslist = [];
  const [todoItem, setTodoItem] = useState(itemslist);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added ${itemName} ${itemDueDate}`);
    setTodoItem((currValue) => [
      ...currValue,
      { name: itemName, duedate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoitem) => {
    const newTodoitems = todoItem.filter((item) => item.name !== todoitem);
    setTodoItem(newTodoitems);
    console.log(`Item Deleted: ${todoitem}`);
  };

  return (
    <>
      <div className="main-div">
        <AddName></AddName>
        <AddTodo handleNewItem={handleNewItem}></AddTodo>
        <Todo itemslist={todoItem} onDeleteClick={handleDeleteItem}></Todo>
        {todoItem.length === 0 && <WelcomeMsg></WelcomeMsg>}
      </div>
    </>
  );
}

export default App;
