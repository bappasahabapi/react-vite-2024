import { useState } from "react";
import Header from "./Header";
import Result from "./Result";
import UserInput from "./UserInput";

export default function CalculatorHome() {
  //initial state
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 100,
    expectedReturn: 2,
    duration: 10,
  });

  const inputIsValid =userInput.duration>=1;

  // genric function for every input
  function handleChange(inputIndentfier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIndentfier]: +newValue,   // newValue is string 
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput onChange={handleChange}  userInput={userInput}/>
      {inputIsValid && <Result userInput={userInput} />}
     
    </main>
  );
}
