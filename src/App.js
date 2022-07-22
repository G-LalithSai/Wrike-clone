import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    setScreenWidth(window.innerWidth);
    // console.log(typeof screenWidth, screenWidth);
  };
  window.addEventListener("resize", handleWidth);
  return (
    <div className="App">
      <Navbar screenWidth={screenWidth} />
      <AllRoutes screenWidth={screenWidth} />
    </div>
  );
}

export default App;
