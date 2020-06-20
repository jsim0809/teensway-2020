import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-text">
        <h2>CONTACT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos magni enim optio ullam, nobis officiis eos qui nesciunt nemo ipsa quae, eveniet ab dicta minus illum voluptatibus maiores veniam amet?</p>
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
