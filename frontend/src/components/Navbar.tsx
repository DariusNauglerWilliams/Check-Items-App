import * as React from "react";
import reactLogo from "../assets/react.svg";
import './Navbar.css'

function Navbar() {

  return(
<>

<nav className="Navbar">
    <div>
<p className="TextLogo">InOut<img src={reactLogo} alt="InPeaceLogo" className="ImageLogo"></img> </p> 
</div>
<div className="navbar-search">
    Search
  </div>

<div>
<ul className="NavbarLinks">
<li>Home</li>
<li>Scan</li>
<li>History</li>
<li>Compare</li>
<li>About</li>
<li>Details</li>
<li>Contact</li>
</ul>
</div>
</nav>

</>
  );


}
export default Navbar