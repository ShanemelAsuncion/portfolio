import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Craft from "./pages/Craft/Craft";
import About from "./pages/About/About";
import NavBar from "./components/Navbar/NavBar";
import "./App.scss"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Craft />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
