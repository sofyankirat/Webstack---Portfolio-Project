import React from "react";

function About() {
  return (
    <div>
      <div className="container-xxl py-5 bg-white">
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="text-primary-gradient fw-medium mt-5">
                About App
              </h5>
              <h1 className="mb-4">#1 App For Your Fitness</h1>
              <p className="mb-4">
                "At FitApp, we are dedicated to empowering individuals on their
                journey to health and wellness. Our mission is to provide
                personalized fitness solutions, expert guidance, and tools that
                make achieving a healthy lifestyle simple and accessible.
                Whether you're aiming to get fit, stay active, or improve your
                overall well-being, FitApp is here to support you every step of
                the way."
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1" />
                    <div className="ms-3">
                      <h2 className="mb-0" data-toggle="counter-up">
                        1234
                      </h2>
                      <p className="text-primary-gradient mb-0">
                        Active Install
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex">
                    <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1" />
                    <div className="ms-3">
                      <h2 className="mb-0" data-toggle="counter-up">
                        1234
                      </h2>
                      <p className="text-secondary-gradient mb-0">
                        Clients Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid wow fadeInUp mt-5"
                data-wow-delay="0.5s"
                src="img/about.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
