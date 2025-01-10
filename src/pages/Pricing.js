import React, { useState } from "react";
import { Link } from "react-router-dom";

function Pricing() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [frequency, setFrequency] = useState(""); // New state for frequency

  const handleGetStartedClick = (event, planName, isYearly) => {
    event.preventDefault();
    setSelectedPlan(planName);
    setFrequency(isYearly ? "Yearly" : "Monthly"); // Set frequency based on the button clicked
    setShowContactForm(true);
  };

  return (
    <div className="container-xxl py-5" id="pricing1">
      <div className="container py-5 px-lg-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="text-primary-gradient fw-medium" style={{ marginTop: "30px" }}>Pricing Plan</h5>
          <h1 className="mb-5">Choose Your Plan</h1>
        </div>
        <div className="tab-class text-center pricing wow fadeInUp" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex justify-content-center bg-primary-gradient rounded-pill mb-5" style={{ marginTop: "-20px" }}>
            <li className="nav-item">
              <button className="nav-link active" data-bs-toggle="pill" href="#tab-1">Monthly</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="pill" href="#tab-2">Yearly</button>
            </li>
          </ul>
          <div className="tab-content text-start">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="bg-light rounded">
                    <div className="border-bottom p-4 mb-4">
                      <h4 className="text-primary-gradient mb-1">Starter Plan</h4>
                      <span>Awesome Features for begginers</span>
                    </div>
                    <div className="p-4 pt-0">
                      <h1 className="mb-3">
                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>14.99<small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                      </h1>
                      <div className="d-flex justify-content-between mb-3"><span>Access to a huge workout library</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Basic nutrition tracking</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Community forums</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-2"><span>Monthly progress tracking</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4" onClick={(e) => handleGetStartedClick(e, "Starter Plan", false)}>Get Started</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-light rounded border">
                    <div className="border-bottom p-4 mb-4">
                      <h4 className="text-primary-gradient mb-1">Advance Plan</h4>
                      <span>Powerful plan for advanced trainees</span>
                    </div>
                    <div className="p-4 pt-0">
                      <h1 className="mb-3">
                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>24.99<small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                      </h1>
                      <div className="d-flex justify-content-between mb-3"><span>All Starter Plan features</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Personalized workout plans</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>In-app challenges and leaderboards</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-2"><span>Integration with most of wearables</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <a href="#" className="btn btn-secondary-gradient rounded-pill py-2 px-4 mt-4" onClick={(e) => handleGetStartedClick(e, "Advance Plan", false)}>Get Started</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-light rounded">
                    <div className="border-bottom p-4 mb-4">
                      <h4 className="text-primary-gradient mb-1">Premium Plan</h4>
                      <span>Full fitness plan for premium trainees</span>
                    </div>
                    <div className="p-4 pt-0">
                      <h1 className="mb-3">
                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>34.99<small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                      </h1>
                      <div className="d-flex justify-content-between mb-3"><span>All Advance Plan feature</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Access to live virtual classes</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>One-on-one coaching sessions</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-2"><span>Advanced nutrition and meal plans</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4" onClick={(e) => handleGetStartedClick(e, "Premium Plan", false)}>Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade p-0">
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="bg-light rounded">
                    <div className="border-bottom p-4 mb-4">
                      <h4 className="text-primary-gradient mb-1">Starter Plan</h4>
                      <span>Awesome Features for begginers</span>
                    </div>
                    <div className="p-4 pt-0">
                      <h1 className="mb-3">
                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>114.99<small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Yearly</small>
                      </h1>
                      <div className="d-flex justify-content-between mb-3"><span>Access to 100+ premium workouts</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Customizable nutrition plans</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Offline workout access</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-2"><span>Monthly goal-setting sessions</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4" onClick={(e) => handleGetStartedClick(e, "Starter Plan", true)}>Get Started</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-light rounded border">
                    <div className="border-bottom p-4 mb-4">
                      <h4 className="text-primary-gradient mb-1">Advance Plan</h4>
                      <span>Powerful plan for advanced trainees</span>
                    </div>
                    <div className="p-4 pt-0">
                      <h1 className="mb-3">
                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>124.99<small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Yearly</small>
                      </h1>
                      <div className="d-flex justify-content-between mb-3"><span>All Starter Plan features</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Personalized fitness assessments</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Access to fitness workshops</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-2"><span>Online Q&A sessions with experts</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4" onClick={(e) => handleGetStartedClick(e, "Advance Plan", true)}>Get Started</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-light rounded">
                    <div className="border-bottom p-4 mb-4">
                      <h4 className="text-primary-gradient mb-1">Premium Plan</h4>
                      <span>Full fitness plan for premium trainees</span>
                    </div>
                    <div className="p-4 pt-0">
                      <h1 className="mb-3">
                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>134.99<small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Yearly</small>
                      </h1>
                      <div className="d-flex justify-content-between mb-3"><span>All Advance Plan features</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Access to live virtual classes</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-3"><span>Dedicated coach for tailored advice</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <div className="d-flex justify-content-between mb-2"><span>Early access to any new features</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                      <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4" onClick={(e) => handleGetStartedClick(e, "Premium Plan", true)}>Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        {showContactForm && (
          <div className="container pt-5" id="contact">
            <div className="container py-5 px-lg-5 mt-5 bg-white">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium" style={{margin:"-100px"}}>{selectedPlan} - {frequency}</h5>
                <h1 className="mb-5" style={{margin:"120px"}}>Cleint's information</h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <p className="text-center mb-4" style={{margin:"-20px"}}>
                      please leave your personal data here, and for more information please  
                      <Link to={`/contact`}> contact us</Link>.
                    </p>
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required/>
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required/>
                            <label htmlFor="email">Your Email</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input type="number" className="form-control" id="email" placeholder="Your height" min="130" max="255" required/>
                            <label htmlFor="email">Your height-m</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input type="number" className="form-control" id="email" placeholder="Your weight" min="40" max="200" required/>
                            <label htmlFor="email">Your weight-kg</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input type="tel" className="form-control" id="email" placeholder="Your phone number" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" required/>
                            <label htmlFor="email">Your phone number_<small>format : 012-3456-7890</small></label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input type="number" className="form-control" id="email" placeholder="Your age" min="14" max="60" required/>
                            <label htmlFor="email">Your age</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea className="form-control" placeholder="Your address" id="message" required></textarea>
                            <label htmlFor="message">Your address</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                            <label htmlFor="message">Your expectations (optional)</label>
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Subscribe Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pricing;
