import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
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
      </section>
    </footer>
  );
};

export default Footer;
