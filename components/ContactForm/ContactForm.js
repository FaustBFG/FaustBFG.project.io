import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-form">
      <h2>Still have questions?</h2>
      <p>Fill out the form and we will contact you!</p>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Comment or question" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
