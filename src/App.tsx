import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import { paths } from "./utils/paths";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={paths.home} element={<Homepage />} />
          <Route path={paths.transactions} element={<Homepage />} />
          <Route path={paths.cards} element={<Homepage />} />
          <Route path={paths.invoices} element={<Homepage />} />
          <Route path={paths.goals} element={<Homepage />} />
          <Route path={paths.settings} element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
