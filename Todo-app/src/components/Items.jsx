import Todoitem from "./Todoitem"
const Todo=({itemslist})=>{
    return (
        <>
        {itemslist.map((item)=>(
            <Todoitem  todoDate={item.duedate} todoitem={item.name}></Todoitem>))
        } 
        
        </>
)
};

export default Todo;
