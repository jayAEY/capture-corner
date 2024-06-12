import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer id="mobile-footer">
        <h3> Catch us on instagram</h3>
        <div className="social-posts-footer">
          <a href="https://instagram.com">
            <img
              className="social-preview-img"
              src="photos/jessica-rockowitz-5NLCaz2wJXE-unsplash.jpg"
              alt="Beautiful family walking through field"
            />
          </a>
          <a href="https://instagram.com">
            <img
              className="social-preview-img"
              src="photos/patty-brito-eHOZjZEx7u8-unsplash.jpg"
              alt="Brother hugging his little sister in a field"
            />
          </a>
          <a href="https://instagram.com">
            <img
              className="social-preview-img"
              src="photos/kelly-sikkema-WvVyudMd1Es-unsplash.jpg"
              alt="Parents adoring their newborn baby"
            />
          </a>
        </div>
        <section className="banner">
          <img
            className="banner-img"
            src="photos/mark-harpur-K2s_YE031CA-unsplash.jpg"
            alt="Field of flowers during sunset."
          />
          <h2 className="banner-text">
            <Link to="/contact">
              Ready to get in touch? <FaArrowRight size={"30px"} />
            </Link>
          </h2>
          <h3 className="banner-h3">Right this way</h3>
        </section>
      </footer>
      <footer id="desktop-footer">
        <section className="footer-area">
          <h2 className="footer-area-text">A little bit more</h2>
          <h3 className="banner-h3">
            <Link to="/meet">
              About us <FaArrowRight size={"30px"} />
            </Link>
          </h3>
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
        </section>
        <section className="footer-social-area">
          <h3> Catch us on instagram</h3>
          <div className="social-posts-footer">
            <a href="https://instagram.com">
              <img
                className="social-preview-img"
                src="photos/jessica-rockowitz-5NLCaz2wJXE-unsplash.jpg"
                alt="Beautiful family walking through field"
              />
            </a>
            <a href="https://instagram.com">
              <img
                className="social-preview-img"
                src="photos/patty-brito-eHOZjZEx7u8-unsplash.jpg"
                alt="Brother hugging his little sister in a field"
              />
            </a>
            <a href="https://instagram.com">
              <img
                className="social-preview-img"
                src="photos/kelly-sikkema-WvVyudMd1Es-unsplash.jpg"
                alt="Parents adoring their newborn baby"
              />
            </a>
          </div>
        </section>
        <section className="footer-area">
          <h2 className="footer-area-text">Ready to book?</h2>
          <h3 className="banner-h3">
            <Link to="/meet">
              contact
              <FaArrowRight size={"30px"} />
            </Link>
          </h3>
          <section className="sm-links">
            <div className="phone">555 - 555 - 9090</div>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
