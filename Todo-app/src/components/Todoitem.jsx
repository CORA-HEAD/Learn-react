import { MdDelete } from "react-icons/md";
export default function Todoitem({todoDate,todoitem,onDeleteClick}){

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