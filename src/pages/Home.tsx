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
        ></img>
        <img
          className="photo"
          src="photos/ioann-mark-kuznietsov-9QTQFihyles-unsplash.jpg"
          alt="Two parents with their children looking into a forrest"
        ></img>
        <img
          className="photo"
          src="photos/lawrence-crayton-e2qz2V0SMpo-unsplash.jpg"
          alt="Mother holding her baby at the beach"
        ></img>
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
        <h1>
          Let's have some fun! <FaArrowRight />
        </h1>
      </section>
    </main>
  );
}

export default App;
