import React, { useState } from 'react';
import "./ContactForm.css";
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email"
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your message"
          />
        </label>
        <button type="submit">Send Message</button>
        {submitted && <p>Thank you for contacting us!</p>}
      </form>
    </div>
  );
};

export default ContactForm;