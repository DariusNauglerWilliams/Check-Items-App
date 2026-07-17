import { Link } from "react-router-dom";
import "../pages/login.css";

function Login() {
  return (
    <>
      <section className="login-page">
        <div className="login-container">
          <h2 className="login-title">Log In</h2>
          <p className="login-description">Welcome back! Log In to continue</p>
          <p className="login-description-secondary">
            scanning and comparing products.
          </p>

          <div className="login-form">
            <h3 className="email-title">Email</h3>
            <input
              className="email-enter"
              type="email"
              placeholder="Enter your email"
            />

            <h3 className="password-title">Password</h3>
            <input
              className="password-enter"
              type="password"
              placeholder="Enter your password"
            />

            
            <div className="login-options">
            <label className="remember-me">
              <input className="remember-me-checkbox" type="checkbox" />
              {" "}
              Remember me
            </label>
              


              <h6 className="forgot-password-link">
              <Link to="/forgotpassword" className="auth-link">
                Forgot Password?
              </Link>
            </h6>
              </div>
          

            <button className="login-button">Log In</button> 

            


            

            <h6 className="signup-link">
              Don't have an account?{" "}
              <Link to="/register" className="auth-link">
                Sign up
              </Link>
            </h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;