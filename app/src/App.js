import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Craft from "./pages/Craft/Craft";
import About from "./pages/About/About";
import NavBar from "./components/Navbar/NavBar";
import "./App.scss"
import Playground from "./pages/Playground/Playground";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Craft />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Playground />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
