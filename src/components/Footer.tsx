import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

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
          <h2 className="footer-area-text">
            <Link to="/meet">
              A little bit more
              <FaArrowRight size={"30px"} />
            </Link>
          </h2>
          <h3 className="banner-h3">About us</h3>
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
          <h2 className="footer-area-text">
            <Link to="/contact">
              Ready to get in touch? <FaArrowRight size={"30px"} />
            </Link>
          </h2>
          <h3 className="banner-h3">Right this way</h3>
        </section>
      </footer>
    </>
  );
};

export default Footer;
