import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Check if email is valid
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.classList.add('required');
    } else {
      e.target.classList.remove('required');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleBlur}
            required
          />
          <span className="error-message">* Name is required</span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            required
          />
          {emailError && <span className="error-message">{emailError}</span>}
          <span className="error-message">* Email is required</span>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            onBlur={handleBlur}
            required
          ></textarea>
          <span className="error-message">* Message is required</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

