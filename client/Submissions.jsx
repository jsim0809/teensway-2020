import React from 'react';
import HubspotForm from 'react-hubspot-form';

function Submissions() {
  return (
    <section className="contact">
      <div className="contact-text">
        <h2>SUBMISSIONS</h2>
        <p>If you attended Teensway 2020, you can add to your personal comic page by sending Jeremy a message here. You can send in a new comic, a new avatar picture, or a new bio. Or just say hi!</p>
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

export default Submissions;
