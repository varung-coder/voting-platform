import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Vote from "./Pages/Vote";
import Voters from "./Pages/Voters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/voters" element={<Voters />} />
      </Routes>
    </Router>
  );
}

export default App;