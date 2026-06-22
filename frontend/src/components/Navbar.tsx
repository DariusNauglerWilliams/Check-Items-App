import * as React from "react";
import reactLogo from "../assets/react.svg";
import './Navbar.css'
import SearchBar from "./SearchBar";

function Navbar() {

  return(
<>

<nav className="Navbar">
    <div>
<p className="TextLogo">InOut<img src={reactLogo} alt="InPeaceLogo" className="ImageLogo"></img> </p> 
</div>

<SearchBar></SearchBar>

<div>
<ul className="NavbarLinks">
<li>Home</li>
<li>Scan</li>
<li>History</li>
<li>Compare</li>
</ul>
</div>
</nav>

</>
  );


}
export default Navbar