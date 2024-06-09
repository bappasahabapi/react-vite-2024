import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalculatorHome from "./pages/investmenCalculator/CalculatorHome";
import Navigation from "./components/Navigation";

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
      </Router>
    </div>
  );
}

export default App;
