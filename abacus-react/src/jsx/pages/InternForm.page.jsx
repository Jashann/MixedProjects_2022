import React, { useRef, useState} from "react";
import {ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

export default function InternFormPage(props) {
    const [file1, setFile1] = useState()
    const [file2, setFile2] = useState()
    const emailRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    const formHandler = (e) => {
        e.preventDefault();
       if(!emailRef.current.value){
        return setError("Email value can't be blank!")
       }
        
        try {
            setError("")
            setLoading(true)
            if(file1){
                const storageRef = ref(storage, `files/${emailRef.current.value}/${file1.name}`);
                uploadBytesResumable(storageRef, file1);
            }
            if(file2){
                const storageRef = ref(storage, `files/${emailRef.current.value}/${file2.name}`);
                uploadBytesResumable(storageRef, file2);
            } 
          } catch {
            setError("Failed to send an application")
          }
          setLoading(false)
      };
    
    function handleChangeResume(event) {
        setFile1(event.target.files[0])
    }
    
    function handleChangeCV(event) {
        setFile2(event.target.files[0])
    }
    return (
        <div className='formDetails mt-5 animate__animated animate__zoomInUp'>
            <div className="container">

                <p><b>Abacus Analysis</b> partners with a diverse and vibrant community to help our customers enhance their AI and machine learning models. The work of our AI Community contributes to improving technology and the digital experiences of many people around the world. Our AI Community works in our proprietary AI training platform handling all data types (text, images, audio, video and geo) across 500+ languages and dialects. We offer flexible work-from-home opportunities for people with passion for languages. The jobs are part-time, and there is no fixed schedule. Whoever you are, wherever you come from, come join our global AI community. </p>
                <p>We are looking for students or recent graduates with strong grasp on Mathematics, Stastics, Computer programming, or Data analysis.</p>
                <h3>Role: <br/></h3>
                <p>Your responsibilities include:</p>
                <ul>
                    <li>Design and develop AI models to meet project requirements</li>
                    <li>Convert AI/ML models into APIs that other developers can use</li>
                    <li>Perform statistical analysis on big data sets</li>
                    <li>Manage project infrastructure and the development of AI models and projects</li>
                    <li>Work with other machine learning engineers, data engineers, and AI engineers to develop machine learning models</li>
                </ul>
                <h3>Requirements: <br/></h3>
                <ul>
                    <li>Students or recent graduates in Mathematics, Stastics, Computer programming, or Data analysis</li>
                    <li>Familiarity with deep learning and machine learning algorithms and the use of popular AI/ML frameworks (Tensorflow/Keras, PyTorch, scikit-learn)</li>
                    <li>Advanced knowledge of statistical and algorithmic models as well as of fundamental mathematical concepts, such as linear algebra and probability</li>
                    <li>Experience working with large data sets and writing efficient code capable of processing large data streams at speed</li>
                    <li>Excellent communication and problem-solving skills</li>
                </ul>


                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-lg-6">
                        <div className='formDiv bg-light'>
                            <h3>Apply for Apprenticeship</h3>
                            <hr/>
                            
                            <form onSubmit={formHandler}> 
                            {error && <div class="alert alert-danger" role="alert">{error}</div>}
                                <div class="row mb-3">
                                    <label for="firstName" class="col-sm-2 col-form-label">First Name </label>
                                    <div class="col-sm-10">
                                        <input type="name" name="name" id="firstName" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                                    <div class="col-sm-10">
                                        <input type="name" name="name" id="lastName" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input ref={emailRef} type="email" name="email" id="email" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="inputAddress" id="inputAddress" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputCity" class="col-sm-2 col-form-label">City</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="inputCity" id="inputCity" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputState" class="col-sm-2 col-form-label">State</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="inputState" id="inputState" class="form-control"/>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row mb-3">
                                    <label for="linkedIn" class="col-sm-2 col-form-label">LinkedIn</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="linkedIn" id="linkedIn" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="website" class="col-sm-2 col-form-label">Website</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="website" id="website" class="form-control"/>
                                    </div>
                                </div>
                                <hr/>
                                <div class="input-group mb-3">
                                    <label for="resume" class="col-sm-2 col-form-label">Resume</label>
                                    <input onChange={handleChangeResume} type="file" class="form-control" id="resume"/>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="coverLetter" class="col-sm-2 col-form-label">Cover Letter</label>
                                    <input onChange={handleChangeCV} type="file" class="form-control" id="coverLetter"/>
                                </div>

                                <div className="submitbutton">
                                    <button disabled={loading} type="Submit" class="btn btn-success rounded-pill in-flex-center">Submit <ion-icon class="ms-1" name="push-outline"></ion-icon> </button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
      );
}