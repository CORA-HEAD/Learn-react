import './App.css'
import Statitems from "./components/stationaryitem"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  let itemlist=["pencil","eraser","pen","scale","register"]
 return (
 <>
 <Statitems checked={itemlist}></Statitems>

 </>


 )
}

export default App
