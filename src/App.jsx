import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalculatorHome from "./pages/investmenCalculator/CalculatorHome";
import Navigation from "./components/Navigation";
import ExpensesHome from "./pages/Expenses/ExpensesHome";


function App() {
  return (
    <div>
      <Navigation/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/calculator" element={<CalculatorHome />} />
        </Routes>
        <Routes>
          <Route path="/expenses" element={<ExpensesHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
