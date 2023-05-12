import React from 'react'
export default function LinkList(){
   
   return(
    <div className='mt-5'>
        <div data-aos="fade-right" className='row'>
          <div className='col col-12 col-md-3 '>
          <nav class="nav flex-column ">
              <h5>Platform</h5>
              <hr/>
              <a class="nav-link" href="#">Services</a>
              <a class="nav-link" href="#">Career</a>
              <a class="nav-link" href="#">Articles</a>
              <a class="nav-link" href="#">Contact us</a>
              
            </nav>
          </div>
          <div className='col col-12 col-md-3'>
          <nav class="nav flex-column ">
              <h5>Services</h5>
              <hr/>
              <a class="nav-link" href="#">Data analysis</a>
              <a class="nav-link" href="#">Resume review</a>
              <a class="nav-link" href="#">Career guidance</a>
              <a class="nav-link" href="#">Artificial Intelligence</a>
            </nav>
            
          </div>
          <div className='col col-12 col-md-3'>
          <nav class="nav flex-column ">
              <h5>How it works</h5>
              <hr/>
              <a class="nav-link" href="#">Login</a>
              <a class="nav-link" href="#">Sign Up</a>
              <a class="nav-link" href="#">Apprenticeship</a>
              <a class="nav-link disabled">Privacy statement</a>
            </nav>
          </div>
          <div className='col col-12 col-md-2'>
            <nav class="nav flex-column">
              <h5>Abacus <span className="text-primary">Analysis</span></h5>
              
              <div className='row'>
              <div className='col'>
              <hr/>
              <a class="nav-link" href="#"><span className="text-primary"><ion-icon size="large"  name="logo-linkedin"></ion-icon></span></a>
              <a class="nav-link" href="#"><span className="text-primary"><ion-icon size="large" name="logo-discord"></ion-icon></span></a>
              </div>
              <div className='col'>
              <span className="text-primary"><hr/></span>
              <a class="nav-link" href="#"><span className="text-primary"><ion-icon size="large" name="logo-twitter"></ion-icon></span></a>
              <a class="nav-link" href="#"><span className="text-primary"><ion-icon size="large" name="logo-facebook"></ion-icon></span></a>
           
              </div>
              </div>
              
            </nav>
             
          </div>
          
        </div>
       
    </div>);
}