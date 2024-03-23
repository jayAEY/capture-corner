import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaBars,
  FaSnapchat,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaXmark,
} from "react-icons/fa6";

// import navbar from "../styles/navbar.scss";
// import "../styles/navbar.scss";
// import "../App.scss";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("resize", console.log(window.innerWidth));
  // }, []);

  return (
    <header>
      {mobileMenu ? (
        <FaXmark
          className="mobileMenu-toggle"
          id="close"
          onClick={() => setMobileMenu(false)}
        />
      ) : (
        <FaBars
          className="mobileMenu-toggle"
          id="open"
          onClick={() => setMobileMenu(true)}
        />
      )}
      <div id="logo">
        <h1>📸</h1>
        <h1>CaptureCorner</h1>
        <h2>Photo Co.</h2>
      </div>

      {mobileMenu ? (
        <nav id="mobile-nav">
          <Link to="/">Home</Link>
          <Link to="/meet">Meet Us</Link>
          <Link to="/details">Details</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
          <section className="sm-links">
            <p>Follow Us</p>
            <div className="icons">
              <a href="https://www.snapchat.com">
                <FaSnapchat size={30} />
              </a>
              <a href="https://instagram.com">
                <FaInstagram size={30} />
              </a>
              <a href="https://facebook.com">
                <FaFacebook size={30} />
              </a>
              <a href="https://pinterest.com">
                <FaPinterest size={30} />
              </a>
            </div>
          </section>
        </nav>
      ) : (
        <nav id="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/meet">Meet Us</Link>
          <Link to="/details">Details</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
          <section className="sm-links">
            <p>Follow Us</p>
            <div className="icons">
              <a href="https://www.snapchat.com">
                <FaSnapchat size={30} />
              </a>
              <a href="https://instagram.com">
                <FaInstagram size={30} />
              </a>
              <a href="https://facebook.com">
                <FaFacebook size={30} />
              </a>
              <a href="https://pinterest.com">
                <FaPinterest size={30} />
              </a>
            </div>
          </section>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
