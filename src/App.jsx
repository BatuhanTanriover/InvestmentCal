import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Tablee from "./components/Tablee";
import { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 13000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 12,
  });

  const inputIsValid =
    inputValues.duration >= 1 &&
    inputValues.initialInvestment >= 1 &&
    inputValues.expectedReturn >= 1 &&
    inputValues.annualInvestment >= 1;

  const handleInputChange = (processName, value) => {
    setInputValues((prevInputValue) => {
      let updatedObj = {};
      updatedObj = {
        ...prevInputValue,
        [processName]: parseInt(value),
      };

      return updatedObj;
    });
  };

  return (
    <>
      <Header />
      <Inputs inputValues={inputValues} onInputChange={handleInputChange} />
     {inputIsValid ?  <Tablee inputValues={inputValues}  /> : <p className="center">Please enter 1 or positive in the input fields.</p> }
    </>
  );
}

export default App;
