import React from 'react'
import OwlCarousel from "react-owl-carousel"; // Import OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css"; //Import style
import "owl.carousel/dist/assets/owl.theme.default.css";// Import theme styles

function TopReviews() {
  // OwlCarousel options
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    center:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
    <div className="container-xxl py-5 bg-white" id="review">
      <div className="container py-5 px-lg-5">
        <div className="text-center wow fadeInUp m-5" data-wow-delay="0.1s">
          <h1 className="text-primary-gradient mb-5">TOP REVIEWS!</h1>
        </div>

        <OwlCarousel
          className="owl-carousel testimonial-carousel wow fadeInUp"
          {...options}
        >
          <div className="testimonial-item rounded p-4">
            <div className="d-flex align-items-center mb-4">
              <img
                className="img-fluid bg-white rounded flex-shrink-0 p-1"
                src="img/testimonial-1.jpg"
                style={{ width: 85, height: 85 }}
                alt=""
              />
              <div className="ms-4">
                <h5 className="mb-1">Emily R.</h5>
                <p className="mb-1">Profession</p>
                <div>
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                </div>
              </div>
            </div>
            <p className="mb-0">
            "This app is perfect for beginners! The guided workouts are easy to follow,
             and I love the video demonstrations.
             It's helped me build my confidence in the gym."
            </p>
          </div>



          <div className="testimonial-item rounded p-4">
            <div className="d-flex align-items-center mb-4">
              <img
                className="img-fluid bg-white rounded flex-shrink-0 p-1"
                src="img/testimonial-4.jpg"
                style={{ width: 85, height: 85 }}
                alt=""
              />
              <div className="ms-4">
                <h5 className="mb-1">Samantha L.</h5>
                <p className="mb-1">Profession</p>
                <div>
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                </div>
              </div>
            </div>
            <p className="mb-0">
            "I love the nutrition tracking feature! It’s made meal planning so much easier.
             The barcode scanner is a game changer for logging foods quickly."
            </p>
          </div>
          <div className="testimonial-item rounded p-4">
            <div className="d-flex align-items-center mb-4">
              <img
                className="img-fluid bg-white rounded flex-shrink-0 p-1"
                src="img/testimonial-5.jpg"
                style={{ width: 85, height: 85 }}
                alt=""
              />
              <div className="ms-4">
                <h5 className="mb-1">Daniel P.</h5>
                <p className="mb-1">Profession</p>
                <div>
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                  <small className="fa fa-star text-warning" />
                </div>
              </div>
            </div>
            <p className="mb-0">
            "The community aspect is fantastic! I’ve made friends and found workout buddies.
             The ability to share progress and tips is really motivating."
            </p>
          </div>
        </OwlCarousel>
      </div>
    </div>
    </>
  )
}

export default TopReviews