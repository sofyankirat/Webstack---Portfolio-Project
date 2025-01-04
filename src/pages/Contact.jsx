import React from 'react'
import { Link } from 'react-router-dom'



export default function Contact() {
return <>
<div className="container- pt-5" id="contact1">
            <div className="container py-5 px-lg-5 bg-white">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
                    <h1 className="mb-5">Get In Touch!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">You can now leave your personal data here, and We Will Call You in a very Soon Time. <Link to={`/`}>Contact us Now</Link>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" required/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" required/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" required/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" required></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
  
  </>
}
