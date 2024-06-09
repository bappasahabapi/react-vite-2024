/* eslint-disable react/prop-types */


export default function UserInput({onChange,userInput}) {

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            required={true}
            onChange={(event) => onChange('initialInvestment', event.target.value)}
            // onChange={(event) => handleChange(name, event.target.value)}
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required={true}
            onChange={(event) => onChange("annualInvestment", event.target.value)}
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required={true}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            // name="duration"
            required={true}
            onChange={(event) => onChange('duration', event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </div>
  );
}
