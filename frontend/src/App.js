import React, { useState } from "react";
import "./App.css";

import Portal from "./components/Portal";
import Coal from "./components/Coal";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/coal" element={<Coal/>} />
            <Route path="/portal" element={<Portal/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
