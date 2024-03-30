const Details = () => {
  return (
    <main id="details-page">
      <section className="hero">
        <img
          className="photo"
          src="photos/ioann-mark-kuznietsov-9QTQFihyles-unsplash.jpg"
          alt="Beautiful family walking through field"
        />
        <h1>
          Lets talk about <br />
          <span className="script-highlight">the details</span>
          <br />
          ✏️
        </h1>
        <p id="hero-p">
          We are passionate about photography and love to freeze moments in time
          through our lens. With a keen eye for detail and a creative approach,
          we strive to capture the essence and emotion of every subject we
          photograph.
          <br />
          <br />
          Whether you're looking for a professional portrait session, wedding
          coverage, or creative event photography, we offer a range of services
          tailored to meet your needs. Let's collaborate to bring your vision to
          life and create unforgettable memories.
        </p>
      </section>
      <section className="services">
        <h1>Example packages:</h1>
        <div className="package">
          <h3 className="package-title">
            <span className="number">1.</span>
            <br /> babies / newborns
          </h3>
          <p className="package-description">
            Every precious moment is captured with love and care. Our
            photography service specializes in capturing the innocence, joy, and
            beauty of newborns and babies in their most natural and adorable
            state. From those first sleepy smiles to the tiny fingers and toes,
            we strive to create timeless portraits that will be treasured for
            generations to come.
          </p>
          <h4 className="price">Starting at $500</h4>
        </div>
        <div className="package">
          <h3 className="package-title">
            <span className="number">2.</span>
            <br /> children
          </h3>
          <p className="package-description">
            Whether it's capturing the innocence of a toddler's first steps or
            the exuberance of a school-aged child's laughter, our goal is to
            create cherished memories that will be treasured for years to come.
            Let us tell the story of your child's journey through captivating
            images that capture the magic of childhood.
          </p>
          <h4 className="price">Starting at $350</h4>
        </div>
        <div className="package">
          <h3 className="package-title">
            <span className="number">3.</span>
            <br />
            families
          </h3>
          <p className="package-description">
            Our goal is to freeze moments in time that tell the unique story of
            your family's bond and togetherness. Whether it's a candid outdoor
            session in a picturesque location or a cozy indoor shoot in the
            comfort of your own home, we strive to create a relaxed and
            enjoyable experience for everyone involved. Let us be a part of your
            family's journey, capturing the moments that matter most and
            preserving them in beautiful photographs that tell your story.
          </p>
          <h4 className="price">Starting at $600</h4>
        </div>
        <h2>
          Let's make
          <br />
          some magic!
        </h2>
      </section>
    </main>
  );
};

export default Details;
