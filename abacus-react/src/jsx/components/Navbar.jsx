import React from 'react';
import { Link } from 'react-router-dom'
import { URL_ROUTES } from '../URL_ROUTES.data'
import Logo2 from "./../../resources/img/main/robot.png" 

const Navbar = () => {
    return (
        <>    
            <nav className="navbar py-0 navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link data-aos="fade-right" className="navbar-brand navbar-brand d-flex justify-content-center align-items-center" to={URL_ROUTES.HOME}> 
                        <img src={Logo2} width="70px" alt="" />
                        <p className="logo ms-2 mt-4">
                        <span className="text-primary">Abacus</span> <span>Analysis</span>
                        </p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="animate__animated animate__fadeInRightBig collapse navbar-collapse mt-4 mt-lg-0" id="navbarColor03">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link rounded-pill active mt-2 mt-lg-0 flex-center" to="/">Home <ion-icon class="ms-1" name="home-outline"></ion-icon>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill active mt-2 mt-lg-0 flex-center" href={URL_ROUTES.HOME_SERVICES}>Services <ion-icon class="ms-1" name="globe-outline"></ion-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill active mt-2 mt-lg-0 flex-center" href={URL_ROUTES.HOME_CONTACT}>Contact  <ion-icon class="ms-1" name="people-outline"></ion-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link rounded-pill active mt-2 mt-lg-0 flex-center" to={URL_ROUTES.LOGIN}>Login  <ion-icon class="ms-1" name="log-in-outline"></ion-icon>
                            </Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link rounded-pill active mt-2 mt-lg-0 flex-center" to={URL_ROUTES.INTERN_APPLICATION}>Apply  <ion-icon class="ms-1" name="aperture-outline"></ion-icon>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <br /><br /> <br />
        </>
    );
}

export default Navbar;
