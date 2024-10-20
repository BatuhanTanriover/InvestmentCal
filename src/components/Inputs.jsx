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
          <input type="number" required name="annualInvestment"value={inputValues.annualInvestment} onChange={handleChange}/>
          <label>Expected return</label>
          <input type="number" required  name="expectedReturn" value={inputValues.expectedReturn} onChange={handleChange} />
          <label>Duration</label>
          <input type="number" required name="duration" value={inputValues.duration} onChange={handleChange}/>
        </div>
      </section>
    </>
  );
}
