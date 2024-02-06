import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (data) => {
    // Send email logic using nodemailer
    setSuccess(true);
  };

  return (
    <section style={{ flexDirection: 'column', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-14%' }}>
      {success ?
        <p style={{ fontWeight: 'bold' }}>Message sent successfully!</p>
        :
        <ContactForm onSubmit={handleSubmit} />

      }
    </section>
  );
};

export default Contact;
