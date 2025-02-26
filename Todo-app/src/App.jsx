import './App.css'
import AddName from './components/AddName'
import AddTodo from './components/AddTodo'
import Todo from './components/items'
function App() {
  const itemslist=[{
    name:"milk",
    duedate:"21/2/2025"
  },{
    name:"butter",
    duedate:"3/5/2024"
  }]
  return (<>
  <div className="main-div">
    <AddName></AddName>
    <AddTodo></AddTodo>
    <Todo itemslist={itemslist}></Todo>
  </div>
  
    </>
  )
}

export default App
