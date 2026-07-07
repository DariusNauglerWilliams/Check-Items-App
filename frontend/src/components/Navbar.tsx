import reactLogo from "../assets/logo.png";
import './Navbar.css'
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom"

function Navbar() {

  return(
<>

<nav className="Navbar">
    <div>
      <Link to="/" className="LogoLink">
<p className="TextLogo">
  <img src={reactLogo} alt="InPeaceLogo" className="ImageLogo"></img> 
  In-Out
  </p> 
  </Link>
</div>

<SearchBar></SearchBar>

<div>
<ul className="NavbarLinks">
<li><Link to="/">Home</Link></li>
<li><Link to="/scan">Scan</Link></li>
<li><Link to="/history">History</Link></li>
<li><Link to="/compare">Compare</Link></li>
<li><Link to="/register">Sign In</Link></li>
</ul>

</div>
</nav>

</>
  );


}
export default Navbar