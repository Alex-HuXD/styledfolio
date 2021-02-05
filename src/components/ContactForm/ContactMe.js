import React from "react";
import "./contactMe.css";
import emailjs from "emailjs-com";

const ContactMe = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_dafezal",
        e.target,
        "user_yMOaLV3eRvmEqzLDVPvQE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="title-container">
          <h2 className="title">Contact Me</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div
              style={{
                height: "2px",
                width: "50px",
                background: "whitesmoke",
              }}
            ></div>
            <h3 className="subTitle">Get in touch</h3>
            <div
              style={{ height: "2px", width: "50px", background: "whitesmoke" }}
            ></div>
          </div>
        </div>

        <div className="contact-form">
          <form action="#" onSubmit={sendEmail}>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="subject"
              />
            </div>

            <div className="form-group ">
              <label for="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="your message"
                rows="8"
                cols="50"
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
