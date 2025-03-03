import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText==='C'){
      setCalVal("");
    }
    else if(buttonText==='='){
      const result=eval(calVal);
      setCalVal(result);

    }
    else{
      const newDisplayValue = calVal+buttonText;
      setCalVal(newDisplayValue);
    }
    console.log(buttonText);
  };
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
