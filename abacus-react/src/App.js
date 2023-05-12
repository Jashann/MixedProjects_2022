import './App.css';
import "./resources/css/bootstrap.min.css";
// Opening new route scrolling 
import "./resources/css/animate.min.css";
// Scrolling as you go through page
import AOS from 'aos';
import './../node_modules/aos/dist/aos.css';
// Scroll as you scroll through

import "./resources/css/style.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './jsx/components/Navbar'
import Footer from './jsx/components/Footer'
import Article from './jsx/components/Article'

import LoginPage from './jsx/pages/Login.page'
import SignUpPage from './jsx/pages/SignUp.page'
import InternFormPage from './jsx/pages/InternForm.page'
import CareersPage from './jsx/pages/Careers.page';
import React from "react";
import HomePage from './jsx/pages/Home.page'
import { URL_ROUTES } from './jsx/URL_ROUTES.data'
import { AuthProvider } from './contexts/AuthContext';
import { ARTICLES, ARTICLES_IMAGES, ARTICLES_TITLES } from './jsx/CONTENT.data'
import ResumePage from './jsx/pages/Services/Resume.page'
import ScrollToTopHelper from './jsx/components/ScrollToTop.helper'
import Analysis from './jsx/pages/Services/Analysis.page';
import { useEffect } from 'react'

 function App() {
  // const [currentForm, setCurrentForm]=useState('login');
  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // }

  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 1100
    });
  }, [])

  return (
    <div className="App d-flex flex-column min-vh-100">
      <AuthProvider>
        <Router>   
          <ScrollToTopHelper />
          <Navbar />
          <Routes>
            <Route path={URL_ROUTES.HOME} element={ <HomePage/> } />
            <Route path={URL_ROUTES.LOGIN} element={ <LoginPage/> } />
            <Route path={URL_ROUTES.SIGN_UP} element={ <SignUpPage/> } />
            <Route path={URL_ROUTES.INTERN_APPLICATION} element={ <InternFormPage/> } />
            <Route path={URL_ROUTES.CAREERS_INFO} element={ <CareersPage/> } />  
            <Route path={URL_ROUTES.SERVICES_RESUME} element={ <ResumePage/> } />
            <Route path={URL_ROUTES.SERVICES_ANALYSIS} element={ <Analysis/> } />

            {/* Setting up separate articles pages */}
            {
              ARTICLES.map( (article, index) => <Route path={URL_ROUTES.ARTICLES + index } element={ <Article title={ARTICLES_TITLES[index]} image={ARTICLES_IMAGES[index]} children={article} /> } /> )
            }

          </Routes>
          <Footer />

        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
