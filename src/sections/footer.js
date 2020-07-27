import React from "react";
import Button from "components/button";
import BrandIcon from "components/icon-text";

export default function Footer() {
  return (
    <footer className="spacing-sm">
      <div className="container">
        <div className="wrapper">
          <div id="sitemap">
            <div id="brand-wrapper" className="col-4">
              <BrandIcon />
              <p id="slogan" className="footer-text">
                We kaboom your beauty holiday instantly and memorable
              </p>
            </div>
            <div id="links-wrapper">
              <div className="footer-links">
                <h6 className="links-title">For Beginners</h6>
                <Button
                  type="link"
                  className="footer-link footer-text"
                  href="#"
                >
                  New Account
                </Button>
                <Button
                  type="link"
                  className="footer-link footer-text"
                  href="#"
                >
                  Start Booking a Room
                </Button>
                <Button
                  type="link"
                  className="footer-link footer-text"
                  href="#"
                >
                  Use Payments
                </Button>
              </div>
              <div className="footer-links">
                <h6 className="links-title">Explore Us</h6>
                <Button
                  type="link"
                  className="footer-link footer-text"
                  href="#"
                >
                  Our Careers
                </Button>
                <Button
                  type="link"
                  className="footer-link footer-text"
                  href="#"
                >
                  Privacy
                </Button>
                <Button
                  type="link"
                  className="footer-link footer-text"
                  href="#"
                >
                  Terms & Conditions
                </Button>
              </div>
              <div className="footer-links">
                <h6 className="links-title">Connect Us</h6>
                <h6 className="footer-text">support@staycation.id</h6>
                <h6 className="footer-text">(021) 2208-1996</h6>
                <h6 className="footer-text">Staycation, Kemang, Jakarta</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h6 id="copyright" className="footer-text">
            Copyright 2020 • All Rights Reserved • Staycation
          </h6>
        </div>
      </div>
    </footer>
  );
}
