import { useState,useRef } from "react";
import Todoitem from "./Todoitem";
import { MdOutlineAddBox } from "react-icons/md";

export default function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [duedate, setDueDate] = useState("");
  const noOfClicks=useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfClicks.current+=1;
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`noOfClicks are:${noOfClicks.current}`);
  };
  const handleAddButtonClicked = (event) => {
    console.log(event);
    event.preventDefault();
    handleNewItem(todoName, duedate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <>
      <div className="container">
        <form action=" " className="row" onSubmit={handleAddButtonClicked}>
          <div className="col-3">
            <input type="text" onChange={handleNameChange} value={todoName} />
          </div>
          <div className="col-6">
            <input type="date" onChange={handleDateChange} value={duedate} />
          </div>
          <div className="col-2">
            <button type="submit"
              className="btn btn-success kg-button"
            >
              <MdOutlineAddBox />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
