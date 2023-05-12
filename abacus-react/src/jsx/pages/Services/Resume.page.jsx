import React from 'react'
import Image from "./../../../resources/img/backgrounds/resume.png"
import Image2 from "./../../../resources/img/backgrounds/Slide1.jpg"
import Carousel from '../../components/Carousel'
import { Article_SERVICE_REVIEWS } from '../../CONTENT.data'
import { CAROUSEL_TYPES } from '../../URL_ROUTES.data'
function ResumePage() {
  return (
    <div className='mt-5 justify-content-center'>
      <div className="row justify-content-center m-5">
        <h1>Get your <span className='text-primary'>Resume Reviewed</span> by Professionals</h1>
        <p>Get a free, confidential review from a resume expert.</p>
            <div className="col-12 col-lg-6 mt-5">
                <div className='formDiv bg-light' id="resume_submit">
                    <h3 className='mt-4 mb-3'> Upload  <span className='text-primary'>Resume</span> </h3>
                    
                    <br />
                    <form action="https://formsubmit.co/jashangill3592@gmail.com" method="POST" enctype="multipart/form-data" >
                        
                        {/* Email Subject */}
                        <input type="hidden" name="_subject" value="New submission!"/>
                        <div class="row mb-3">
                            <label for="fullName" class="col-sm-2 col-form-label">Full Name </label>
                            <div class="col-sm-10">
                                <input required type="name" name="name" id="fullName" class="form-control"/>
                            </div>

                        </div>
                        <div class="row mb-3">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input required type="email" name="email" id="email" class="form-control" />
                            </div>
                        </div>
                        <hr/>
                        <div class="input-group mb-3">
                            <label for="resume" class="col-sm-2 col-form-label">Resume</label>
                            <input required type="file" name='resume' class="form-control" id="resume" 
                            accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                            />
                        </div>

                            <div class="row mb-3">
                            <label for="information" class="col-sm-2 col-form-label"> More Info </label>
                            <div class="col-sm-10">
                                <textarea rows="4" type="name" name="name" id="information" class="form-control"/>
                            </div>
                        </div>


                        <div className="submitbutton">
                            <button type="Submit" class="btn btn-success rounded-pill in-flex-center">Submit <ion-icon class="ms-1" name="push-outline"></ion-icon> </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        <div className="row justify-content-center m-5">
        
            <div className="col-12 col-lg-4 mt-5 ">

                <h1> Did you <span className="text-primary">know?</span> </h1>
                <br/>
                <div className='quotes'>
                    <h5>75 percent of job applications are rejected before they are seen by human eyes.</h5>
                </div>
                <br/>
                    <p>Surprised right? but sadly it is the reality. While Automation has made the hiring process relatively easy for companies today, it also turned out to be a nighmare to many promising & qualified candidate.
                        <br/><br/>A hiring manager may not see a resume before it is processed by an <span className="text-primary">applicant tracking system</span>. (ATS). This is a type of software used by employers to organize and rank job applications for open positions. If a resume is not optimized for an ATS, it may not be properly considered, even if the candidate is qualified for the job. 
                    </p>
            </div>
            <div className="col-12 col-lg-1"></div>
            <a href={Image} target="_blank" rel="noreferrer" className="col-12 col-lg-7 mt-5"  >
                <img className='mt-5' src={Image}alt="resume review imag" width="80%" height="70%"></img>
            </a>
        </div>
        <div className="justify-content-center bg-light">
            <div className='row m-5 mb-0'>
                <h1 className="mt-5 ">Review Process</h1>
                <div className="col-12 col-lg-4 mt-5 mb-5" width="100%">
                    <h3 className='mb-4'><span className="text-primary">Organization</span></h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><p>Is your resume neat and clearly organized?</p></li>
                        <li class="list-group-item"><p>Does the format of your resume effectively show the impact of your achievements?</p></li>
                        <li class="list-group-item"><p>Have you included a professional summary to introduce your candidacy?</p></li>
                    </ul>

                </div>
                <div className="col-12 col-lg-4 mt-5 mb-5">
                    <h3 className='mb-4'><span className="text-primary">Language</span></h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><p>Does your resume's writing position you as a professional who will add value to an organization?</p></li>
                        <li class="list-group-item"><p>Is the writing clear, easy to understand and free of mistakes?</p></li>
                        <li class="list-group-item"><p>Do you have consistent grammatical tense, tone, and punctuations?</p></li>
                    </ul>
                    
                </div>
                <div className="col-12 col-lg-4 mt-5 mb-5">
                    <h3 className='mb-4'><span className="text-primary">ATS </span></h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><p>Will the ATS be able to read your resume?</p></li>
                        <li class="list-group-item"><p>How does the ATS interpret your experience and skills?</p></li>
                        <li class="list-group-item"><p>What industries do you have expertise in?</p></li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="position-relative">
            <img src={Image2} alt="resume review imag" width="80%" height="50%"></img>
            <div class="position-absolute bottom-0 end-0 m-5">
                <h2>Never go <span className="text-primary">Unnoticed</span> again!</h2>
                <p>get your resume verified!</p>
                <a className="btn btn-primary rounded-pill in-flex-center" href="#resume_submit"> Submit Application <ion-icon class='ms-1' name="cloud-upload-outline"></ion-icon> </a>
            </div>
            
        </div>
        <div className='mt-5 bg-light'>
            
            <Carousel id="reviews_carousel" reviews={Article_SERVICE_REVIEWS} type={CAROUSEL_TYPES.STUDENT} >
                <h1 class="text-center mt-3"> Student <span class="text-primary">Reviews</span></h1>
            </Carousel>
        
        </div>
       
    </div>
  )
}

export default ResumePage