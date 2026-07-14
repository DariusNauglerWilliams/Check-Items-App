import { Link } from "react-router-dom";
import "../pages/register.css";

function Register() {
  return (
    <section className="register-page">
      <section className="register-container">
        <header className="register-header">
          <h2 className="register-title">New to the app?</h2>
          <h5 className="register-subtitle">Create your account to save your scans,</h5>
          <h5 className="register-subtitle">track your history, and compare products</h5>
        </header>


        

        <form className="register-form">


             <h3 className="register-label">Full Name</h3>
          <input
            className="register-input"
            type="text"
            placeholder="Enter your full name"
          />


             <h3 className="register-label">Email</h3>

          <input
            className="register-input"
            type="email"
            placeholder="Enter your email"
          />

             <h3 className="register-label">Password</h3>

          <input
            className="register-input"
            type="password"
            placeholder="Create a password"
          />
          <img src="" className="img-password"></img>

          <h3 className="register-label">Confirm Password</h3>
          <input
            className="register-input"
            type="password"
            placeholder="Confirm your password"
          />
          <img src="" className="img-password"></img>

            <button type="submit" className="register-button">
            Sign Up
          </button>


 <section className="register-footer">
          <h5 className="register-footer-text">
            Already have an account? <Link className="register-link" to="/login">
              Log in
            </Link>
          </h5>
        </section>    
        </form>

       
      </section>
    </section>
  );
}

export default Register;