import './App.css'
import Statitems from "./Components/stationaryitem"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "./Components/Container";
import Stationary from './Components/stationaryinput';
import { useState } from 'react';

function App() {

  
  // let itemlist=["pencil","eraser","pen","scale","register"]
  
  const OnKeyDown=(event)=>{
    if(event.key=== 'Enter'){
    let newStationaryItem=event.target.value;
    event.target.value="";
    let newItems=[...itemlist,newStationaryItem];
    setState(newItems);
    console.log('Stationary Value entered is '+newStationaryItem)
    }
    // console.log(event);
    // setTextState(event.target.value);
  }
  // let textStateArr=useState("Item enter for stationary");
  // let textToshow=textStateArr[0];
  // let setTextState=textStateArr[1];
  //or 
  let [textToshow,setTextState]=useState();
  let [itemlist,setState]=useState(["pencil","eraser","pen"]);
  console.log(`Current value of textState ${textToshow}`)

 return (
 <>
 <Container>
  <Stationary handleOnKeyDown={OnKeyDown}></Stationary> 
  <p>{textToshow }</p>
  <Statitems checked={itemlist}></Statitems>
 </Container>
 
 {/* <Container>
 <p >Above is the list of best quality product </p>
 </Container> */}

 </>


 )
}

export default App
