import Todoitem from "./Todoitem"
const Todo=({itemslist,onDeleteClick})=>{
    return (
        <>
        {itemslist.map((item)=>(
            <Todoitem onDeleteClick={onDeleteClick} todoDate={item.duedate} todoitem={item.name}></Todoitem>))
        } 
        
        </>
)
};
export default Todo;
