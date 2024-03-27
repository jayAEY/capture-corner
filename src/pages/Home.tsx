import "../App.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function App() {
  return (
    <main>
      <section className="hero">
        <img
          className="photo"
          src="photos/jessica-rockowitz-5NLCaz2wJXE-unsplash.jpg"
          alt="Beautiful family walking through field"
        />
        <img
          className="photo"
          src="photos/ioann-mark-kuznietsov-9QTQFihyles-unsplash.jpg"
          alt="Two parents with their children looking into a forrest"
        />
        <img
          className="photo"
          src="photos/lawrence-crayton-e2qz2V0SMpo-unsplash.jpg"
          alt="Mother holding her baby at the beach"
        />
        <h1 id="hero-h1">
          capture <span className="script-highlight">Moments,</span> <br />
          create <span className="script-highlight">Memories.</span>
          <br />
          📷
        </h1>
        <p id="hero-p">
          Let's collaborate to bring your vision to life and create
          unforgettable memories.
        </p>
      </section>
      <section className="work-preview">
        <h2>
          Let's have some fun! <FaArrowRight />
        </h2>
        <p>
          Explore a diverse collection of images. Each photograph tells a unique
          story.
        </p>
        <img
          className="photo"
          src="photos/patty-brito-eHOZjZEx7u8-unsplash.jpg"
          alt="Brother hugging his little sister in a field"
        />
        <h3 className="work-label">Children</h3>
        <img
          className="photo"
          src="photos/kelly-sikkema-WvVyudMd1Es-unsplash.jpg"
          alt="Parents adoring their newborn baby"
        />
        <h3 className="work-label">Family</h3>
      </section>
      <section className="banner">
        <img
          className="banner-img"
          src="photos/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg"
          alt="Field of grass during sunset."
        />
        <h2 className="banner-text">Create Unforgettable Memories</h2>
      </section>
      <section className="footer">
        <h2> Catch us on instagram</h2>
        <div className="social-posts-footer">
          <img
            className="social-preview-img"
            src="photos/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg"
            alt="Field of grass during sunset."
          />
          <img
            className="social-preview-img"
            src="photos/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg"
            alt="Field of grass during sunset."
          />
          <img
            className="social-preview-img"
            src="photos/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg"
            alt="Field of grass during sunset."
          />
        </div>
      </section>
    </main>
  );
}

export default App;
