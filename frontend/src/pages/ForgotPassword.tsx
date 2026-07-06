import { Link } from "react-router-dom"

function ForgotPassword(){

return(
<>

<section>
<h5>Enter your email and we'll send you a password reset link.</h5>

<input
  type="email"
  placeholder="Email"
/>

<button>Send Reset Link</button>


<p>
<Link to="/login">Back to Sign In</Link>
</p>
</section>



</>

)


}
export default ForgotPassword