import { Link } from "react-router-dom";
import "../pages/forgotpassword.css";
import arrowimg from "../assets/back.png";
import emailimg from "../assets/email (1).png";

function ForgotPassword() {
  return (
    <>
      <section className="forgot-password-page">
        <div className="forgot-password-container">
          <h3 className="forgot-password-title">Forgot Password</h3>

          <p className="forgot-password-description">
            No worries! Enter your email address and
          </p>

          <p className="forgot-password-description-secondary">
            we'll send you a link to reset your password.
          </p>

          <div className="forgot-password-form">
            <h3 className="forgot-email-title">Email</h3>

            <input
              className="forgot-email-enter"
              type="email"
              placeholder="Enter your email"
            />

            <img
              src={emailimg}
              className="forgot-password-image"
              alt=""
            />

            <button className="reset-password-button">
              Send Reset Link
            </button>

            <p className="forgot-or-text">or</p>

            <p className="forgot-back-login">
              <Link to="/login" className="forgot-auth-link">
                <img
                  src={arrowimg}
                  className="forgot-back-login-icon"
                  alt=""
                />
                Back to Log In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;