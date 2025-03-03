import { TodoItemsContext } from "../store/todo-items-store";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
export default function Todoitem({todoDate,todoitem,onDeleteClick}){
    const todoItemsFromContext= useContext(TodoItemsContext);
    console.log(`items from context:${todoItemsFromContext}`);
    
    return (
        <>
       
        <div className="container">
            <div className="row">
                <div className="col-3">{todoitem}</div>
                <div className="col-3">{todoDate}</div>
                <div className="col-3">
                    <button  type="button" className="btn btn-danger kg-button" onClick={()=>{onDeleteClick(todoitem)
                        
                    }}>
                        <MdDelete></MdDelete>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}