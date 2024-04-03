import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaSnapchat,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      {mobileMenu ? (
        <FaXmark
          className="mobile-menu-toggle"
          id="close"
          onClick={() => setMobileMenu(false)}
        />
      ) : (
        <FaBars
          className="mobile-menu-toggle"
          id="open"
          onClick={() => setMobileMenu(true)}
        />
      )}
      <div id="logo">
        <h1>📸</h1>
        <h1>CaptureCorner</h1>
        <h2>Photo Co.</h2>
      </div>
      {mobileMenu && (
        <nav id="mobile-nav">
          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/meet"
            onClick={() => setMobileMenu(false)}
          >
            Meet Us
          </Link>
          <Link
            to="/details"
            onClick={() => setMobileMenu(false)}
          >
            Details
          </Link>
          <Link
            to="/work"
            onClick={() => setMobileMenu(false)}
          >
            Our Work
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
          >
            Contact Us
          </Link>
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
      <nav id="desktop-nav">
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
        <Link to="/">Home</Link>
        <Link to="/meet">Meet Us</Link>
        <Link to="/details">Details</Link>
        <Link to="/work">Our Work</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
