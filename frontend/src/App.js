import React from "react";
import "./App.css";

import Portal from "./components/Portal";
import Coal from "./components/Coal";
import Login from "./components/Login";
import PowerPlant from "./components/PowerPlant";
import Logistics from "./components/Logistics";
import { Navigate, Routes, Route } from "react-router-dom";
function App() {
  const Type = localStorage.getItem("Type");

  return (
    <div className="App">
      <div className="wrapper">
        {/* <Routes>
          {Type === "mine" && <Route path="/" exact element={<Coal />} />}
          {Type === "logistics" && <Route path="/" exact element={<Logistics/> } />}
          {Type === "powerplant" && (
            <Route path="/" exact element={<Portal />} />
          )}

          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/coal" element={<Coal/>} />
            <Route path="/portal" element={<Portal/>} />
          <Route path="/login" element={<Login />} />
        </Routes>  */}
        <Login/>
      </div>
    </div>
  );
}

export default App;
