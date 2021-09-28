import React from "react";
import { Link } from "react-router-dom";
import "../cascading/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6>WORKING HOURS</h6>
                <ul>
                  <li>Monday : 08:00 am – 08:30 pm</li>
                  <li>Tuesday : 08:00 am – 08:30 pm</li>
                  <li>Wednesday : 08:00 am – 08:30 pm</li>
                  <li>Thursday : 08:00 am – 08:30 pm</li>
                  <li>Friday : 08:00 am – 08:30 pm</li>
                  <li>Saturday : 10:00 am – 02:30 pm</li>
                  <li>Sunday : Close</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="#">
                    <img src="./image/logo.png" alt="" className="foot-logo" />
                  </a>
                </div>
                <p>
                Treat your loved ones to some of the best cakes on the internet. From classic black-forest to Spider-Man designs to stunning three-tiered cakes, look no further than Online Delivery for hundreds of mouth-watering cakes in many exotic flavours, shapes, and designs.
                </p>
                <div className="footer__social">
                  <a href="#">
                    {" "}
                    <FaFacebookF />{" "}
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__newslatter">
                <h6>QUICK LINKS</h6>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="/Login">Login</a>
                  </li>
                  <li>
                    <a href="/Register">Register</a>
                  </li>
                  <li>
                    <a href="/customercomplaint">Compliants</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
