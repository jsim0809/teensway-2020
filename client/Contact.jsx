import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-text">
        <h2>CONTACT</h2>
        <p>Enjoyed a comic? Want to leave a note for one of our creators? Leave your message here, and we'll make sure it reaches them.</p>
      </div>
      <form action="https://formspree.io/mnqgzade" method="POST">
        <label>
          <div>Your name</div>
          <input type="text" name="name" />
        </label>
        <label>
          <div>Your email</div>
          <input type="text" name="_replyto" />
        </label>
        <label>
          <div>Your message</div>
          <textarea name="message"></textarea>
        </label>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
