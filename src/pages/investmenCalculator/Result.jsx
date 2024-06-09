/* eslint-disable react/prop-types */

import { calculateInvestmentResults, formatter } from "../../utils/investment";

export default function Result({ userInput }) {
  // console.log(userInput) // {}
  const resultData = calculateInvestmentResults(userInput);
//   console.log(resultData);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  // console.log(initialInvestment) // 1000
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
        const totalInterest = (yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year)) -initialInvestment;
        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
              
            </tr>
          );
        })}

      </tbody>
    </table>
  );
}
