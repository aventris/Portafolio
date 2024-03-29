import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import EmailConfirmation from "./EmailConfirmation";
import "@styles/Contact.scss";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState(false);
  const [confirmation, setConfirmation] = useState({
    toggle: false,
    state: null,
  });

  const validateEmail = (data) => {
    const valid =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        data
      );
    if (!valid && data.length > 0) setError(true);
    else setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    setConfirmation({ toggle: true, state: null });
    emailjs
      .sendForm(
        "service_62t6xdj",
        "template_w5zlc3l",
        "#myForm",
        "OOCKNtQ9JZtQch_xR"
      )
      .then((res) => {
        //console.log("Success!", res.status, res.text);
        setConfirmation({ toggle: true, state: true });
      })
      .catch((error) => {
        console.log("Failed", error);
        setConfirmation({ toggle: true, state: false });
      })
      .finally(() => {
        setForm({ name: "", email: "", message: "" });
      });
  };

  const handleCloseConfirmation = () => {
    console.log("Closing");
    setConfirmation((prevSt) => ({ ...prevSt, toggle: false }));
  };

  const handleInput = (event) => {
    const input = event.currentTarget;
    setForm({ ...form, [input.name]: input.value });
    if (input.name === "email") validateEmail(input.value);
  };
  return (
    <React.Fragment>
      <div className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact-wrapper">
          <h2>Contact me!</h2>
          <p>Let's make some awesome project together</p>
          <form id="myForm" onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleInput}
                  value={form.name}
                  placeholder="Ismael Perez"
                  className="contact-input"
                  type="text"
                  name="name"
                />
              </div>
              <div className={error ? "error" : ""}>
                <label htmlFor="name">Email</label>
                <input
                  onChange={handleInput}
                  value={form.email}
                  placeholder="example@domain.com"
                  className="contact-input"
                  type="email"
                  name="email"
                />
                {error && <p>Please enter a valid email.</p>}
              </div>
            </div>
            <label htmlFor="message">Message</label>
            <textarea
              onChange={handleInput}
              value={form.message}
              placeholder="Write your message here"
              className="contact-input"
              name="message"
            ></textarea>
            <div className="button-wrapper">
              <button
                className="submit-button"
                type="submit"
                value="Send message"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className="contact-social">
          <a href="https://www.linkedin.com/in/ismael-po/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/aventris" target="_blank">
            <BsGithub />
          </a>
        </div>
      </div>
      {confirmation.toggle ? (
        <EmailConfirmation
          type={confirmation.state}
          closeConfirmation={handleCloseConfirmation}
        />
      ) : null}
    </React.Fragment>
  );
};

export default Contact;
