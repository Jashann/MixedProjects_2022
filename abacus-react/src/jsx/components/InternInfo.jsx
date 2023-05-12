import React from "react";
import { Link } from "react-router-dom";
import { URL_ROUTES } from "../URL_ROUTES.data";
import Image from "./../../resources/img/person/person1.jpg"

export default function InternInfo() {
  return(
    <div data-aos="fade-left" className="bg-light">
        <div className='carasaul_container'>
          <h2>Inside <span className="text-primary">Abacus</span> Analysis</h2>
          <br/><br/>
          <div className="row align-items-center justify-content-center">
            <div className="col-8 col-lg-4 mb-4">
                <p> Apply your skills to improve business, society and the human condition. Learn what opportunities exist in our talent network. </p>
                <Link className="btn btn-primary rounded-pill in-flex-center m-1" to={URL_ROUTES.CAREERS_INFO}> Careers <ion-icon class="ms-1" name="people-outline"></ion-icon> </Link> 
            </div>
            <div className="col-8 col-lg-1"></div>
            <div className="col-8 col-lg-4 mb-4">
              <img  width="100%" className="img-fluid" src={Image} alt="" />
            </div>
            
              
            
          </div>
          
      </div>
    </div>
      
  )

}