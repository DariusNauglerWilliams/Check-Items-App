import { Link } from "react-router-dom"


function Register(){

return(
<>

<section>
<h2>New too the app?</h2>
<h5>Create your account</h5>

<input
  type="text"
  placeholder="Name"
/>

<input
  type="email"
  placeholder="Email"
/>

<input
  type="password"
  placeholder="Password"
/>

<input
  type="password"
  placeholder="Confirm Password"
/>

<button>Register</button>

</section>

<section>
    <h5>
       Already have an account? <Link to="/login">Sign In</Link>
    </h5>
</section>


</>

)


}
export default Register