import React from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";

import "./App.css";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default App;
