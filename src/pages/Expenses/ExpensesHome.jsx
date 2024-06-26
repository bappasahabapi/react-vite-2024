/* eslint-disable no-unused-vars */

import Expenses from "./Expenses/Expenses";
import ExpenseTopic from "./Expenses/ExpenseTopic";
import "./ExpensesHome.css";

const ExpensesHome = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      {/* <main>
        <ExpenseTopic />
      </main> */}
      <h2 style={{ textAlign: "center", color: "lime" }}>Expenses Home page</h2>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        Working with state and event handler
      </p>
      <Expenses items={expenses} />
    </div>
  );
};

export default ExpensesHome;
