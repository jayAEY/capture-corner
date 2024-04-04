import { useRef } from "react";

const Contact = () => {
  const formElement = useRef<HTMLFormElement>(null);
  const submitSection = useRef<HTMLElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formElement.current && (formElement.current.style.display = "none");
    submitSection.current && (submitSection.current.style.display = "flex");
  }

  return (
    <main id="contact-page">
      <form
        id="contact-form"
        ref={formElement}
        className="contact-main"
        onSubmit={handleSubmit}
      >
        <h1 className="h1-first-line">contact us</h1>
        <h1 className="h1-second-line">say hi!</h1>
        <h2>please fill our form below and we'll be in touch soon!</h2>
        <input
          type="text"
          form="contact-form"
          name="name"
          placeholder="your name"
        />
        <input
          type="email"
          form="contact-form"
          name="email"
          placeholder="email"
          required
        />
        <select
          name="package"
          id="package"
          form="contact-form"
        >
          <option defaultValue="select">select package</option>
          <option value="babies">babies / newborns</option>
          <option value="families">families</option>
          <option value="children">children</option>
          <option value="other">other</option>
        </select>
        <input
          type="text"
          form="contact-form"
          name="location"
          placeholder="preferred location"
        />
        <input
          id="text-area"
          type="text-area"
          name="message"
          placeholder="tell us more!"
        ></input>
        <button
          id="submit"
          type="submit"
        >
          send away!
        </button>
      </form>
      <section
        ref={submitSection}
        id="submit-success"
        className="contact-main"
      >
        <h1 className="h1-first-line">Form Sent</h1>
        <h1 className="h1-second-line">Thank You!</h1>
        <h2> We'll be in touch soon!</h2>
      </section>
    </main>
  );
};

export default Contact;
