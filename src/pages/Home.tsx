import "../App.scss";
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
        <div className="work-preview-text">
          <h2>
            Let's have some fun! <FaArrowRight />
          </h2>
          <p>
            With a keen eye for detail and a creative approach, we strive to
            capture the essence and emotion of every subject we photograph.
            Explore a diverse collection of images. Whether you're looking for a
            professional portrait session, wedding coverage, or creative event
            photography, I offer a range of services tailored to meet your
            needs. Each photograph tells a unique story.
          </p>
        </div>
        <div className="photo-div">
          <img
            className="photo"
            src="photos/patty-brito-eHOZjZEx7u8-unsplash.jpg"
            alt="Brother hugging his little sister in a field"
          />
          <h3 className="work-label">Children</h3>
        </div>
        <div className="photo-div">
          <img
            className="photo"
            src="photos/kelly-sikkema-WvVyudMd1Es-unsplash.jpg"
            alt="Parents adoring their newborn baby"
          />
          <h3 className="work-label">Family</h3>
        </div>
      </section>
      <section className="banner">
        <img
          className="banner-img"
          src="photos/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg"
          alt="Field of grass during sunset."
        />
        <h2 className="banner-text">Create Unforgettable Memories</h2>
      </section>
    </main>
  );
}

export default App;
