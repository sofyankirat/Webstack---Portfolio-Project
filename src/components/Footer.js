import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
        <div
          className="container-xxl bg-primary text-light footer wow fadeIn"
          data-wow-delay="0.1s"
          style={{marginTop: "0px"}}
        >
          <div className="container py-5 px-lg-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Address</h4>
                <p>
                  <i className="fa fa-map-marker-alt me-3" />
                  123 Street, Cairo , Egypt
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3" />
                  +012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope me-3" />
                  info@example.com
                </p>
                <div className="d-flex pt-2">
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://x.com/"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="https://facebook.com">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="https://instagram.com">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="https://linked-in.com">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Quick Link</h4>
                <Link className="btn btn-link" to={"/about"}>
                  About Us
                </Link>
                <Link className="btn btn-link" to={'/contact'}>
                  Contact Us
                </Link>
                <Link className="btn btn-link" to={'/'}>
                  Privacy Policy
                </Link>
                <Link className="btn btn-link" to={'/'}>
                  Terms &amp; Condition
                </Link>
                <Link className="btn btn-link" to={"/"}>
                  Career
                </Link>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Popular Link</h4>
                <Link className="btn btn-link" to={'/about'}>
                  About Us
                </Link>
                <Link className="btn btn-link" to={'/contact'}>
                  Contact Us
                </Link>
                <Link className="btn btn-link" to={'/'}>
                  Privacy Policy
                </Link>
                <Link className="btn btn-link" to={"/"}>
                  Terms &amp; Condition
                </Link>
                <Link className="btn btn-link" to={'/'}>
                  Career
                </Link>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p>
                  you can send your email here 
                </p>
                <div className="position-relative w-100 mt-3">
                  <input
                    className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                    style={{ height: 48 }}
                  />
                  <button
                    type="button"
                    className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i className="fa fa-paper-plane text-primary-gradient fs-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-lg-5">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  ©{" "}
                  <Link className="border-bottom" to={"/"}>
                    FitApp
                  </Link>
                  , All Right Reserved.
                  {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                  
                  {/* <a className="border-bottom" href="https://htmlcodex.com">
                    HTML Codex
                  </a> */}
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <Link to={'/'}>Home</Link>
                    <a href>Help</a>
                    <a href>FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Footer;
