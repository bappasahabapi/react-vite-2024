```javascript
import { useState } from "react";

export default function UserInput() {
  //initial state
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 1200,
    expectedReturn: 2,
    duration: 10,
  });

  // genric function for every input
  function handleChange(inputIndentfier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIndentfier]: newValue,
      };
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            required={true}
            onChange={(event) => handleChange(name, event.target.value)}
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required={true}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInput.annulInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required={true}
            onChange={(event) => handleChange('expectedReturn', event.target.value)}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required={true}
            onChange={(event) => handleChange('duration', event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </div>
  );
}
```
