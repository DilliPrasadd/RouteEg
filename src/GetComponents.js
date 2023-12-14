import React, { useContext } from "react";
import { PageContext } from "./Context";
import Home from "./Home";
import About from "./About";
import Settings from "./Settings";
export default function GetComponents() {
  const [state, setState] = useContext(PageContext);
    
  switch (state) {
    case "Home":
      return <Home />;
    case "About":
      return <About></About>; 
    case "Settings":
        return <Settings></Settings>
     
    default: return <h1>no page</h1>
  }
}
