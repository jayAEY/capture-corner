import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
const Meet = () => {
  type photo = {
    love: string;
    p: string;
    src: string;
    alt: string;
  };

  let photoInfo: photo[] = [
    {
      love: "summer days",
      p: "It's a season of joy, laughter, and cherished moments that remind me to savor each precious moment and appreciate the beauty of the world we have around us.",
      src: "photos/ryan-spencer-XGKaRnWjv1c-unsplash.jpg",
      alt: "Waterfront view from sunny city",
    },
    {
      love: "family vacations",
      p: "Whether it's a road trip to a nearby destination or a plane ride to a far-off land, the anticipation and excitement build as we embark on our adventure together. From exploring new cultures and cuisines to creating lasting memories at iconic landmarks and natural wonders, every moment is cherished and shared with those I love most.",
      src: "photos/natalya-zaritskaya-SIOdjcYotms-unsplash.jpg",
      alt: "Family holding hands, walking on beach on a beautiful day",
    },
    {
      love: "baking for friends",
      p: " Whether it's swapping stories over batches of cookies or trying out new recipes together, baking with friends is more than just a culinary activity; it's a joyous celebration of friendship and the simple pleasures of life.",
      src: "photos/imad-786-Ozg-mTvh10w-unsplash.jpg",
      alt: "Delicious looking freshly baked chocolate muffins",
    },
  ];

  const [count, setCount] = useState(1);
  const [current, setCurrent] = useState(photoInfo[0]);

  function switchImg() {
    count === photoInfo.length - 1 ? setCount(0) : setCount(count + 1);
    setCurrent(photoInfo[count]);
  }

  return (
    <main id="meet-page">
      <section className="hero">
        <img
          className="photo"
          src="photos/ioann-mark-kuznietsov-9QTQFihyles-unsplash.jpg"
          alt="Two parents with their children looking into a forrest"
        />

        <h1 id="hero-h1">
          It's very nice to meet you! <br />
          🤝
        </h1>
        <p id="hero-p">
          We are passionate about photography and love to freeze moments in time
          through our lens. With a keen eye for detail and a creative approach,
          we strive to capture the essence and emotion of every subject we
          photograph.
        </p>
      </section>
      <section className="about-photos">
        <img
          className="photo"
          src={current.src}
          alt={current.alt}
        />
        <h2> We love </h2> <br />
        <span className="script-highlight">{current.love}</span>
        <p>{current.p}</p>
        <button
          className="next"
          onClick={() => {
            switchImg();
          }}
        >
          Next <FaArrowRight />
        </button>
      </section>
    </main>
  );
};

export default Meet;
