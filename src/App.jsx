import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import LoginOne from "./components/LoginOne";
import LoginTwo from "./components/LoginTwo";
import LoginThree from "./components/LoginThree";
import LoginFour from "./components/LoginFour";
import LoginFive from "./components/LoginFive";
import FormMultipleInputInOneState from "./components/FormMultipleInputInOneState";
import Validation from "./components/Validation";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
        <Routes>
          <Route path="/login" element={ <Login />}/>
        </Routes>
        <Routes>
          <Route path="/login-1" element={ <LoginOne />}/>
        </Routes>
        <Routes>
          <Route path="/login-2" element={ <LoginTwo />}/>
        </Routes>
        <Routes>
          <Route path="/login-3" element={ <LoginThree />}/>
        </Routes>
        <Routes>
          <Route path="/login-4" element={ <LoginFour />}/>
        </Routes>
        <Routes>
          <Route path="/multiple" element={ <FormMultipleInputInOneState />}/>
        </Routes>
        <Routes>
          <Route path="/login-5" element={ <LoginFive />}/>
        </Routes>
 
        <Routes>
          <Route path="/validation" element={ <Validation />}/>
        </Routes>
        <Routes>
          <Route path="/signup" element={ <SignUp />}/>
        </Routes>
 
        </main>
        <h1 style={{color:'blue', textAlign:'center'}}>Reusable Input Component</h1>
      </>
    </Router>
    
  );
}

export default App;
