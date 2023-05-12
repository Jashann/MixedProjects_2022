import React, {useState, useRef} from 'react';

import Carousel from '../../components/Carousel';
import { ARTICLES_IMAGES, ARTICLES_TITLES } from '../../CONTENT.data';
import { CAROUSEL_TYPES } from '../../URL_ROUTES.data';
import Contact from '../../components/Contact';
import { storage } from '../../../firebase';
import { ref, uploadBytesResumable } from 'firebase/storage';
export default function Analysis(){
  const [file1, setFile1] = useState()
  const emailRef = useRef()
  const [error, setError] = useState("")
  const formHandler = (e) => {
    e.preventDefault();
   if(!emailRef.current.value){
    return setError("Email value can't be blank!")
   }
    
    try {
        setError("")
        
        if(file1){
            const storageRef = ref(storage, `Reports/${emailRef.current.value}/${file1.name}`);
            uploadBytesResumable(storageRef, file1);
        }
      } catch {
        setError("Failed to send an application")
      }
  };
  function handleChangeFile(event) {
    setFile1(event.target.files[0])
  }
    return(
      <div className='analysis'>
        <div className='intro mt-5'>
          <div className='col'>
          <div className='row'>
            <div class="col col-12 col-md-2 ">
           <h5>INTRODUCTION </h5>
            </div>
            <div class="col col-12 col-md-8 ms-3 mt-5" >
              <h1 style={{ alignSelf: 'flex-start', textAlign: 'left' }}>A new data-<span className="text-primary">driven</span> architecture</h1>
              <h6 style={{ alignSelf: 'flex-start', textAlign: 'left' }}><br/><br/>To thrive in this age of the unexpected, companies must leverage data to create customer loyalty, automate business processes, and innovate future ideas. But, the demand for data has outpaced our ability to solve our existing data problems, the copy and paste method has only made things worse
                <br/><br/>Companies need a new architecture—a data fabric—to become truly data-driven and put AI to work. With a data fabric approach, companies can connect the right people, to the right data, at the right time to promote agility, predict outcomes, and personalize experiences.
                <br/>
              </h6>
              <ul class=" m-5">
                <li style={{ alignSelf: 'flex-start', textAlign: 'left' }}><span className="text-primary">Business analytics:</span> Business analytics helps you make confident data-driven decisions informed by real-time insights, forecasts, data analytics, and BI to drive business outcomes.<br/><br/></li>
                <li style={{ alignSelf: 'flex-start', textAlign: 'left' }}><span className="text-primary">Data science and analytics:</span> AI is quickly becoming a critical strategic component for organizations across industries to hasten the delivery of innovative products and services, meet customers expectations, reduce risk and fraud, and to drive revenue growth. Automated, supported analytic tools streamline processes, eliminates costly errors and saves time for data scientists, analysts and line of business owners.<br/><br/></li>
                <li style={{ alignSelf: 'flex-start', textAlign: 'left' }}><span className="text-primary">Text analytics:</span>  By investing in text analytics businesses can empower their experts to dedicate more time on creating value for their stakeholders and less time on cumbersome business processes.</li>
              </ul>
            </div>
          </div>
          <div className='row bg-light pt-5 mt-5 pb-5'>
            <div class="col col-12 col-md-2 ">
            <h5>BENEFITS</h5>
            </div >
            <div class="col col-12 col-md-5 mt-5" style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
             <div className='row ms-2'>
              <h5>Provide access with data fabric</h5>
              <p>Understand how this emerging data strategy and architecture simplifies data access for self-service while ensuring <span className="text-primary">governance</span> and privacy.</p>
             </div>
             <hr/>
             <div className='row ms-2'>
             <h5>Promote agility with data management</h5>
             <p>Improve cost <span className="text-primary">performance</span> and productivity with unparalleled scale and <span className="text-primary">resiliency</span> through end-to-end data management.</p>
             </div>
            </div>
            <div class="col col-12 col-md-5 mt-5" style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
              <div className='row ms-2'>
              <h5>Predict outcomes with business analytics</h5>
              <p>Empower business users with <span className="text-primary">AI-driven</span> self-service analytics to predict and shape future outcomes.</p>
              </div>
              <hr/>
              <div className='row ms-2'>
              <h5>Customize experience with customer care</h5>
              <p>Strengthen customer relationships through any channel with more accurate and <span className="text-primary">concise</span> answers to inquiries in any language.</p>
             </div>
            </div>
          </div>
          
          </div>
        </div>
        
        
          <div className='row pt-5'>
            <div class="col col-12 col-md-2 ">
              <h5>DEMO</h5>
            </div >
            <div class="col col-12 col-md-8 ">
              <div className='row m-5'>
                <div className='col col-12 col-md-3'>
                  <h5 className=' p-2 rounded'>Timed Assignments</h5>
                  <ion-icon size="large"  name="alarm-outline"></ion-icon>              
                </div>
                <div className='col col-12 col-md-3'>
                  <h5 className=' p-2  rounded'>Visualizations</h5>
                  <ion-icon size="large" name="bar-chart-outline"></ion-icon>
                </div>
                <div className='col col-12 col-md-3'>
                  <h5 className=' p-2 rounded'>Preprocessing</h5>
                  <ion-icon size="large" name="construct-outline"></ion-icon>
                </div>
                <div className='col col-12 col-md-3'>
                  <h5 className=' p-2  rounded'>Industry Standards</h5>
                  <ion-icon size="large" name="diamond-outline"></ion-icon>
                </div>
                
              </div>
              
              <div className='analysis_input bg-light p-5'>
              {error && <div class="alert alert-danger" role="alert">{error}</div>}
                <form >            
                  <h5>Get a free indepth analysis on dataset of your choice.</h5>
                  <p>[.csv files only]</p> 
                  <div class="row mb-3">
                      <label for="email" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                          <input ref={emailRef} type="email" name="email" id="email" class="form-control" />
                      </div>
                  </div>
                  <div class="input-group mb-3">
                      <label for="resume" class="col-sm-2 col-form-label">Dataset</label>
                      <input onChange={handleChangeFile} type="file" class="form-control" id="resume"/>
                  </div>
                  <button onClick={formHandler} type="button" class="btn btn-primary"> upload </button>       
                </form>
                <br/>
              </div>
            </div>   
            <div class="col col-12 col-md-6">
              
              </div>
            </div>
        <Carousel id="articles_carousel" article_titles={ARTICLES_TITLES} article_imgs={ARTICLES_IMAGES} type={CAROUSEL_TYPES.ARTICLE} >
          </Carousel>
        <Contact />
       
      </div>
        
    );
}

