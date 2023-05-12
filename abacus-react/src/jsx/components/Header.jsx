import React from 'react'
import Image from "./../../resources/img/graphics/Onlineeducation.svg"

function Header() {
  return (
    <div className="animate__animated animate__zoomInUp container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-lg-8">
          <img width="80%" className="img-fluid" src={Image} alt="" />
        </div>
        <div className="col-12 col-lg-4 justify-content-center">
          
          <h1 id='header-text' className="display-5 text-center text-lg-start mb-4">
            Let's <span className="text-primary">Build</span> Something together
          </h1>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a className="btn btn-primary rounded-pill flex-center m-1" href="#services">Our Services <ion-icon class="ms-1" name="globe-outline"></ion-icon> </a>
            <a className="btn btn-primary rounded-pill flex-center m-1" href="#contact"> Contact Us <ion-icon class="ms-1" name="people-outline"></ion-icon> </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header