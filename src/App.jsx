import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import SongCreatePage from "./pages/SongCreatePage";
import SongEditPage from "./pages/SongEditPage";



function App() {
  return (
 
      <Router>
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route index element={<Home />} />
          <Route path="/create" element={<SongCreatePage />} />
          <Route path="/edit" element={<SongEditPage />} />
        </Routes>
      </Router>

  );
}

export default App;
