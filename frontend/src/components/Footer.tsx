import "./Footer.css"
import { Link } from "react-router-dom";
import reactLogo from "../assets/logo.png";
import githubLogo from "../assets/github-mark-white-logo-b1c0.png";

import linkLogo from "../assets/linkedin-icon-square-white.png";
import homeLogo from "../assets/115-1153942_home-logo-png.png"
import personLogo from "../assets/user.png"
import emailLogo from "../assets/email.png"
import historyLogo from "../assets/history.png"
import compareLogo from "../assets/scales.png"
import scanLogo from "../assets/qr-code.png"

function Footer(){

    return(
<>
<footer className="footer">
<div className="whole-footer">


<div className="footer-brand">
<h3 className="TextLogo2">
  <img src={reactLogo} alt="InOutLogo" className="ImageLogo2"></img> 
  In-Out
  </h3> 
 <p className="text-after">Scan products, review ingredients, and compare healthier choices.</p>
 <p>Made for people who care about what’s going in.</p>
     </div>

      <nav className="widget-1">
        <h4>Navigation</h4>

        <Link to="/" className="footer-link">
          <img src={homeLogo} alt="" className="footer-icon" />
          Home
        </Link>

        <Link to="/scan" className="footer-link">
          <img src={scanLogo} alt="" className="footer-icon" />
          Scan
        </Link>

        <Link to="/compare" className="footer-link">
          <img src={compareLogo} alt="" className="footer-icon" />
          Compare
        </Link>

        <Link to="/history" className="footer-link">
          <img src={historyLogo} alt="" className="footer-icon" />
          History
        </Link>
      </nav>

      <nav className="contact-widget">
        <h4>Contact</h4>

        <a className="footer-link" href="https://github.com/DariusNauglerWilliams" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="" className="footer-icon" />
          GitHub
        </a>

        <a className="footer-link" href="https://www.linkedin.com/in/darius-naugler-williams-5123263b0/" target="_blank" rel="noopener noreferrer">
          <img src={linkLogo} alt="" className="footer-icon" />
          LinkedIn
        </a>

        <a className="footer-link" href="mailto:djnaugler@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailLogo} alt="" className="footer-icon" />
          Email
        </a>
      </nav>

      <div className="footer-bottom">
            <img src={personLogo} alt="" className="footer-icon" />
        <p className="built-by">
          Built by Darius Naugler-Williams
        </p>

        <p className="copyright">
          © 2026 In-Out. All rights reserved.
        </p>
      </div>




</div>
</footer>
</>

    )
}

export default Footer