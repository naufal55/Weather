import React from "react";
import Home from "./pages/Home";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

document.body.style.background = "#49B2E9";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
