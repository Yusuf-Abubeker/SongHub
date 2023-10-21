import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import SongCreatePage from "./pages/SongCreatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<Home />} />
        <Route path="/create" element={<SongCreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
