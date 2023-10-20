import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pos from "./Components/pos";
import About from "./Components/About";


import './App.css';
import HomePage from "./Components/HomePage.js";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="pos" element={<Pos/>} />
        <Route path="About" element={<About/>} />

        </Routes>
        </Router>

      
    </div>
  );
}

export default App;
