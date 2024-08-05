import React from 'react';
import ContactForm from '../components/ContactForm';
import bgContact from '../assets/home/bg-contact.jpeg';

const Contact = () => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgContact})`, opacity: 0.7 }}
      ></div>
      <div className="relative pt-8 pb-8">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
