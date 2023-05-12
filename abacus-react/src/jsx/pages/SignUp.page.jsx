import React, { useState, useRef} from "react";
import { Link } from "react-router-dom"
import { URL_ROUTES } from "../URL_ROUTES.data"
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp(props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }else if((passwordRef.current.value).length <7){
      return setError("Password should have atleast 8 letters")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div className="login mt-5 animate__animated animate__zoomInUp">
      <div className="container">
         <div className="row justify-content-center">
            <form className="col-12 col-lg-6">
            {error && <div class="alert alert-danger" role="alert">{error}</div>}
              <h2>Sign Up</h2>
              <br></br>
              <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"> <ion-icon name="mail-outline"></ion-icon> </span>
                  <input ref={emailRef} type="email" name="email" id="email" class="form-control" placeholder="Your email address" />
              </div>
              <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"> <ion-icon name="key-outline"></ion-icon> </span>
                  <input ref={passwordRef} type="password" name="password" id="password" class="form-control" placeholder="Your password" />
              </div>
              <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"> <ion-icon name="key-outline"></ion-icon> </span>
                  <input ref={passwordConfirmRef} type="password" name="password" id="password2" class="form-control" placeholder="Confirm password" />
              </div> 
              <button type="button" disabled={loading}   onClick={handleSubmit}class="btn btn-primary rounded-pill in-flex-center mt-3">Sign Up <ion-icon class="ms-1" name="person-add-outline"></ion-icon> </button>

              <br></br>
              <br></br>
              <p>Existing User?</p>
              <Link class="btn btn-success rounded-pill in-flex-center" to={URL_ROUTES.LOGIN}> Log In <ion-icon class="ms-1" name="log-in-outline"></ion-icon> </Link>


            </form>
         </div>
      </div>
    </div>
  )
}
