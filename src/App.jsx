import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import LandingPage from "./LandingPage";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{darkMode,setDarkMode} }>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <LandingPage />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
