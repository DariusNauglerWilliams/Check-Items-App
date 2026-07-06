import { Link } from "react-router-dom"

function Login(){

return(
<>
<section>
<h2>Welcome Back!</h2>
<p>Sign in to continue</p>

<input
  type="email"
  placeholder="Email"
/>

<input
  type="password"
  placeholder="Password"
/>

<button>Login</button>


 <h6>
   <Link to="/forgotpassword">Forgot Password?</Link>
    </h6>

  <h6>
    Don't have an account? <Link to="/register">Register</Link> 
    </h6>
</section>

</>

)


}
export default Login