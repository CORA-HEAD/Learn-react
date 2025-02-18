import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
function App() {
  let itemlist=["Milk","Fruits","Vegetables","eggs"]
  return (
    //<> </> short way to use the fragment
    <React.Fragment>
    <div>
      Healthy food
      </div>
      <ul className="list-group">
        {itemlist.map((item)=>(
          <li key={item} className="list-group-item">{item}</li>
        ))
        }
      </ul>
</React.Fragment>
  );
}
export default App;
