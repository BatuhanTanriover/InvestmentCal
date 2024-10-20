import Header from "./components/Header"
import Inputs from "./components/Inputs"
import Tablee from "./components/Tablee"
import { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment : 0,
    AnnualInvestment : 0,
    ExpectedReturn : 0,
    Duration : 0
  });

  const handleInputChange = (processName,value) => {
    setInputValues(prevInputValue => {
      let updatedObj = {};
      updatedObj = {
        ...prevInputValue,
        [processName] : value
      }
      
      return updatedObj;
    })

  }

  return (
    <>
    
    <Header/>
    <Inputs inputValues={inputValues} onInputChange={handleInputChange}/>
    <Tablee inputValues={inputValues}/> 
    
    </>
    
  )
}

export default App
