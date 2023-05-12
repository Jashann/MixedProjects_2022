import React, { useState,useRef } from "react";
import { Link } from "react-router-dom"
import { URL_ROUTES } from "../URL_ROUTES.data"
import { useAuth } from "../../contexts/AuthContext";
export default function Login(props){
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit (e){
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
          } catch {
            setError("Failed to log in")
          }
      
          setLoading(false)
    }
    return (
        <div className="animate__animated animate__zoomInUp mt-5">
            
            <div className="container">
                <div className="row justify-content-center">
                    
                    <form className="col-12 col-lg-6" >
                    {error && <div class="alert alert-danger" role="alert">{error}</div>}
                        <h2 className="mb-5">Log In</h2>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"> <ion-icon name="mail-outline"></ion-icon> </span>
                            <input ref={emailRef} type="email" class="form-control" placeholder="Enter your email" id="inputEmail3"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"> <ion-icon name="key-outline"></ion-icon> </span>
                            <input ref={passwordRef} type="password" class="form-control" placeholder="Enter your password" id="inputPassword3"/>
                        </div>  
                        <button type="button" disabled={loading} class="btn btn-primary rounded-pill in-flex-center mt-3" onClick={handleSubmit}>Log In <ion-icon class="ms-1" name="log-in-outline"></ion-icon> </button>


                        <br></br>
                        <br></br>
                        <p>New User?</p>
                        <Link class="btn btn-success rounded-pill in-flex-center" to={URL_ROUTES.SIGN_UP} >Sign Up <ion-icon class="ms-1" name="person-add-outline"></ion-icon> </Link>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
