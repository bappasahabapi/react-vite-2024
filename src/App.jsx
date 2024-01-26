/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import LandingPage from "./LandingPage";
import { cartReducer, initialState } from "./reducers/CartReducer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [cartData, setCartData] = useState([]);
  const [state, dispatch]=useReducer(cartReducer,initialState)
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{darkMode,setDarkMode} }>
        {/* <MovieContext.Provider value={{ cartData, setCartData }}> */}
        <MovieContext.Provider value={{ state, dispatch }}>
          <LandingPage />
        </MovieContext.Provider>
      </ThemeContext.Provider>
      <ToastContainer/>
    </>
  );
}

export default App;
