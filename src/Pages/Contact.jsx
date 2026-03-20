import React from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1sb367', 'template_contact_us', e.target, 'yVnUsfmRtNB0U-enw')
      .then(() => alert("Message sent!"))
      .catch(() => alert("Error sending message"));
  };

  return (
    <section className="contact">
      <form onSubmit={sendEmail}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="field"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="user_email"
            className="field"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-box">
          <label>Your message</label>
          <textarea
            name="message"
            id="textarea"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send message</button>
        <p className="privacy-note">
  Your data will only be used to contact me. I respect your privacy.
</p>
      </form>
    </section>
  );
};

export default Contact;
