import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../styles/Hero.css';

function Hero() {
  const carouselOptions = {
    items: 1, // Number of items to display
    loop: true, // Infinite loop
    margin: 10, // Margin between items
    nav: true, // Show navigation buttons
    autoplay: true, // Enable auto play
    autoplayTimeout: 3000, // Auto play interval (in milliseconds)
    autoplayHoverPause: true, // Pause autoplay on hover
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div class="container-xxl position-relative p-0" id="home">
      <div className="container-xxl bg-primary hero-header">
        <div className="container px-lg-5">
          <div className="row g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="text-white mb-4 animated slideInDown">
                The Revolutionary App That Helps To Control Your Own Fitness
              </h1>
              <p className="text-white pb-3 animated slideInDown">
                "Welcome to FitApp – your ultimate companion for a healthier,
                fitter lifestyle. Explore personalized workout plans, nutrition
                tips, and track your progress with ease. Whether you're a
                beginner or a fitness enthusiast, FitApp is here to help you
                reach your goals and live your best life."
              </p>
              <Link
                to={"/about"}
                className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft"
              >
                About us
              </Link>
              <Link
                to={"/contact"}
                className="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 rounded-pill animated slideInRight"
              >
                Contact Us
              </Link>
            </div>
            <div
              className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <OwlCarousel
                className="owl-carousel screenshot-carousel"
                {...carouselOptions}
              >
                <img
                  className="img-fluid"
                  src="img/screenshot-1.png"
                  alt="Screenshot 1"
                />
                <img
                  className="img-fluid"
                  src="img/screenshot-2.png"
                  alt="Screenshot 2"
                />
                <img
                  className="img-fluid"
                  src="img/screenshot-3.png"
                  alt="Screenshot 3"
                />
                <img
                  className="img-fluid"
                  src="img/screenshot-4.png"
                  alt="Screenshot 4"
                />
                <img
                  className="img-fluid"
                  src="img/screenshot-5.png"
                  alt="Screenshot 5"
                />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };




export default Hero;
