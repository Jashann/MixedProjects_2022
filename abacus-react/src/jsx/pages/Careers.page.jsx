import React from 'react';
import { Link } from 'react-router-dom';
import { URL_ROUTES } from '../URL_ROUTES.data';
import Image from "./../../resources/img/backgrounds/image__4_.jpg"
export default function CareersPage () {
    return(
        <div >
            <div className="row m-5">
                <img src={Image}alt="interns working at desktop" ></img>
                <div className="col-12 col-lg-4 mt-5">
                    <h1> Who Is <br/> <span className="text-primary">Abacus</span> Analysis</h1>
                    <br/>
                    <p className='text-justify' >With operations in more than 10 countries, <span className="text-primary">Abacus</span> Analysis is a different kind of technology company. We're on the forefront of groundbreaking change — improving businesses, society and the human condition. This all starts with our great team. By encouraging them to explore their curiosities, 
                    it gives us a new outlook on the world and its possibilities for emerging tech.</p>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="row">
                        <div className="col-12 col-lg-5 mt-5">
                            <h3> What it means to work here </h3>
                        </div>
                        <div className="col-12 col-lg-7 mt-5">
                            <p>When you join <span className="text-primary">Abacus</span> Analysis, you join a culture of openness, collaboration and trust. You join a team which aims to bringing change into the world — helping cure diseases, clean our oceans and make technology work for good.</p>
                        </div>
                        <hr/>
                        <div className="col-12 col-lg-5 mt-5">
                            <h3> What our values are </h3>
                        </div>
                        <div className="col-12 col-lg-7 mb-5 mt-5">
                            <p>Dedication to every client's success. Innovation that matters — for our company and for the world. Trust and personal responsibility in all relationships.</p>
                        </div>
                        <hr/>
                        <div className="col-12 col-lg-5 mt-5">
                            <h3> What makes us unique </h3>
                        </div>
                        <div className="col-12 col-lg-7 mb-5 mt-5">
                            <p>Our people are what make us unique. Every individual from around the world with a quest for knowledge has a voice to add to our story.</p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="bg-light py-5 mt-5">
                <div className="row align-items-center m-5 justify-content-center">
                    <div className="col-12 col-lg-6 text-center">
                        <h1 class="display-3 mb-2">Join our talent network</h1>
                        <p>Stay up-to-date on career opportunities that match your skills and interests.</p>    
                        <Link className="nav-link rounded-pill active mt-2 mt-lg-0 d-flex justify-content-center mt-1" to={URL_ROUTES.INTERN_APPLICATION}>
                            <button type="button" class="btn btn-primary rounded-pill in-flex-center">Register Now <ion-icon class="ms-1" name="person-outline"></ion-icon> </button>   
                        </Link>
                
                    </div>

                </div> 
                
            </div>
            
        </div>
    );
}