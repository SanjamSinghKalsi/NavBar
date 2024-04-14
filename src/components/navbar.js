import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>S</span>anjam
            <span>R</span>aghav
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* {social media links} */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          {/* hamburgur */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      {/* main sec/ */}
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Our Website</h1>
      </section>
    </>
  );
};

export default Navbar;
