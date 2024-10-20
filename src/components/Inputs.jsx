import { useState } from "react";



export default function Inputs({inputValues,onInputChange}) {

  const handleChange = (event) => {
    const {name,value} =event.target;
    onInputChange(name,value)
  }

  return (
    <>
      <section className="input-group">
        <div id="user-input">
        
          <label>INıtıal Investment</label>
          <input type="number" required name="initialInvestment" value={inputValues.initialInvestment} onChange={handleChange} />
        
          <label>Annual Investment</label>
          <input type="number" required name="AnnualInvestment"value={inputValues.AnnualInvestment} onChange={handleChange}/>
          <label>Expected return</label>
          <input type="number" required  name="ExpectedReturn" value={inputValues.ExpectedReturn} onChange={handleChange} />
          <label>Duration</label>
          <input type="number" required name="Duration" value={inputValues.Duration} onChange={handleChange}/>
        </div>
      </section>
    </>
  );
}
