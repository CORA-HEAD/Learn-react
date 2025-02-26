import react from 'react'
import './App.css'

function App() {
  let itemlist=["book","Pencil","glue","scale"]
  let itemlist2=[]
  // if(itemlist2.length===0)
  //   return <h3>item not available</h3>
  // let result=itemlist2.length===0 ? <h3>item not available</h3>:null
  return (
    <>
    <h2>Stationary Items</h2>
    {itemlist2.length===0 && <h3>item not available</h3>}
    <ul>
      {itemlist2.map((item)=>(<li>
        {item}
      </li>))}
    </ul>
    </>
  )
  
}

export default App
