import React from 'react';
import HubspotForm from 'react-hubspot-form';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-text">
        <h2>CONTACT</h2>
        <p>Enjoyed a comic? Want to leave a note for one of our creators? Leave your message here, and we'll make sure it reaches them.</p>
      </div>
      <div className="contact-form">
        <HubspotForm
          portalId="8038008"
          formId="f976db6b-2c51-4b0e-92ad-05be4e6a53a3"
        />
      </div>
    </section>
  );
}

export default Contact;
