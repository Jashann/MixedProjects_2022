import React from 'react'
import Image1 from "./../../resources/img/graphics/services/120945-actable-ai-landing-page-animation.gif";
import Image2 from "./../../resources/img/graphics/services/87986-data-analysis.gif";
import Image3 from "./../../resources/img/graphics/services/92883-vishnu-marketing-automation.gif";
import Image4 from "./../../resources/img/graphics/services/job-cv.gif";
import Image5 from "./../../resources/img/graphics/services/career-guidance.gif";
import { Link } from 'react-router-dom'
import { URL_ROUTES } from '../URL_ROUTES.data'




export default function Services() {
  return (
     <div data-aos="fade-right" id="services" className="bg-light py-5 mt-5">
        <div className="container">
          <h1 className="text-center mt-3"> <span className="text-primary">Services</span> We Offer</h1>
          <div className="row">

            <div className="col-12 col-lg-3 mt-5">
              <button type="button" data-bs-toggle="modal" data-bs-target="#webDevPopUp">
                <img className="img-fluid" src={Image5}  alt="" srcSet="" />
                <h4 className="my-4 text-center">Career <span className="text-primary flex-center">Guidance <ion-icon class="ms-1" name="people-outline"></ion-icon> </span> </h4>
              </button>
            </div>

            <div className="col-12 col-lg-3 mt-5">
              <Link to={URL_ROUTES.SERVICES_ANALYSIS}>
                <img className="img-fluid" src={Image2}  alt="" srcSet="" />
                <h4 className="my-4 text-center">Data <span className="text-primary flex-center">Analysis <ion-icon class="ms-1" name="analytics-outline"></ion-icon> </span> </h4>
                </Link>
            </div>

            <div className="col-12 col-lg-3 mt-5">
              <Link to={URL_ROUTES.SERVICES_RESUME}>
                <img className="img-fluid" src={Image4} alt="" srcSet="" />
                <h4 className="my-4 text-center"> <span className="text-primary">Resume</span> <span className='flex-center'> Review <span className="text-primary"> <ion-icon class="ms-1 mt-2" name="reader-outline"></ion-icon> </span>  </span> </h4>
              </Link>
            </div>
            
            <div className="col-12 col-lg-3 mt-5">
              <button type="button" data-bs-toggle="modal" data-bs-target="#webDesignPopUp">
                <img className="img-fluid" src={Image3} alt="" srcSet="" />
                <h4 className="my-4 text-center">Artificial Intelligence <span className="text-primary flex-center"> AI <ion-icon class="ms-1 mb-1" name="terminal-outline"></ion-icon> </span> </h4>
              </button>
            </div>

            {/* <div className="col-12 col-lg-3 mt-5">
               <button type="button" data-bs-toggle="modal" data-bs-target="#softDevPopUp">
                 <img className="img-fluid" src={Image3} alt="" srcSet="" />
                 <h4 className="my-4 text-center"> Software <span className="text-primary flex-center">Automation  <ion-icon class="ms-1" name="cog-outline"></ion-icon> </span> </h4>
              </button>
            </div> */}

          </div>

          {/* <!-- services - Modal - Pop Ups--> */}
          <div className="pop-ups">
            {/* <!-- Web Design --> */}
            <div className="modal fade" id="webDesignPopUp" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-4 text-primary" id="exampleModalLabel">Artificial Intelligence</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary in-flex-center" data-bs-dismiss="modal">Close <ion-icon class='ms-1' name="close-circle-outline"></ion-icon> </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Web Development --> */}
            <div className="modal fade" id="webDevPopUp" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-4 text-primary" id="exampleModalLabel">Data Analysis</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary in-flex-center" data-bs-dismiss="modal">Close <ion-icon class='ms-1' name="close-circle-outline"></ion-icon> </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Software Development --> */}
            <div className="modal fade" id="softDevPopUp" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-4 text-primary" id="exampleModalLabel">Software Automation</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary in-flex-center" data-bs-dismiss="modal">Close <ion-icon class='ms-1' name="close-circle-outline"></ion-icon> </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}
