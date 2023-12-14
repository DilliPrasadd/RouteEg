import "./App.css";
//import Home from "./Home";
import Settings from "./Settings";
//import About from "./About";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Materiui from "./Materiui";
import About from "./About";
import Home from "./Home";

import { Context } from "./Context";
function App() {
  return (
    <div className="App">
      <Context>
        <Materiui></Materiui>
        <BrowserRouter>
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          {/* <Navbar /> */}
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
