import {useRef } from "react";
import Todoitem from "./Todoitem";
import { MdOutlineAddBox } from "react-icons/md";

export default function AddTodo({ handleNewItem }) {
  const todoNameElement = useRef(null);
  const duedateNameElement = useRef(null);

  const handleAddButtonClicked = (event) => {
    console.log(event);
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const duedate=duedateNameElement.current.value;
    todoNameElement.current.value="";
    duedateNameElement.current.value="";
    console.log(`${todoName} due on: ${duedate}`);
    
    handleNewItem(todoName,duedate);
  };
  return (
    <>
      <div className="container">
        <form action=" " className="row" onSubmit={handleAddButtonClicked}>
          <div className="col-3">
            <input type="text" ref={todoNameElement}  />
          </div>
          <div className="col-6">
            <input type="date" ref={duedateNameElement} />
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
