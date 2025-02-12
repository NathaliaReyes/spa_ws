import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function ContactForm() {
  const [state, handleSubmitFormspree] = useForm("xanqdpvj");
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [fieldsCompleted, setFieldsCompleted] = useState(true);
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [phoneRequired, setPhoneRequired] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setfirstName(value);
        setNameRequired(!value);
        break;
      case 'lastName':
        setlastName(value);
        setNameRequired(!value);
        break;
      case 'email':
        setEmail(value);
        setEmailValid(validateEmail(value));
        setEmailRequired(!value);
        break;
      case 'inquiry':
        setInquiry(value);
        break;
      case 'message':
        setMessage(value);
        setMessageRequired(!value);
        break;
      default:
        break;
    }
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setPhoneRequired(!value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !phone || !message) {
      setFieldsCompleted(false);
      return;
    } else if (!emailValid) {
      return;
    }
    setSubmitted(true);
    handleSubmitFormspree(event);
    document.querySelector('#success-modal').classList.add('is-active');

  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <>
      {submitted && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-2 text-center relative">
            <button
              onClick={() => {
                setSubmitted(false);
                window.location.href = '/';
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Your message has been delivered!</h2>
            <p className="text-gray-700 mb-4">Thank you for reaching out Harmony Wellness & Spa - we will get in touch soon!</p>
            <p className="text-gray-500">✨ Have a splendid day! ✨</p>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center ml-4 mr-4 mb-4">
        <form onSubmit={handleSubmit} className="p-5 md:w-1/2 w-full  bg-gray-100 rounded-lg mt-5">
          <h2 className="text-2xl font-extrabold ml-4 mt-5 mb-5 tracking-normal">Get in touch</h2>
          <p className="text-black mb-6 ml-4">Thank you for choosing Harmony Wellness & Spa we are here for you!</p>
          <h2 className="text-xl font-bold tracking-normal ml-4 mt-4 md:mt-8 mb-5 md:mb-5">Drop us a line</h2>
          {!fieldsCompleted && <p className="text-red-500 text-xs mt-2">Please fill out all required fields.</p>}

          <div className="mb-4 ml-4 mr-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              name="firstName"
              value={firstName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
            />
            {nameRequired && <p className="text-red-500 text-xs mt-2">Name is required.</p>}
          </div>

          <div className="mb-4 ml-4 mr-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input
              name="lastName"
              value={lastName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
            />
            {nameRequired && <p className="text-red-500 text-xs mt-2">Last Name is required.</p>}
          </div>

          <div className="mb-4 ml-4 mr-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              name="email"
              value={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="email@example.com"
              onChange={handleChange}
            />
            {emailRequired && <p className="text-red-500 text-xs mt-2">Email is required.</p>}
            {!emailValid && email && <p className="text-red-500 text-xs mt-2">Please enter a valid email address.</p>}
          </div>

          <div className="mb-4 ml-4 mr-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <PhoneInput
              name="phone"
              value={phone}
              placeholder="Enter phone number"
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handlePhoneChange}
              defaultCountry="US" />
            {phoneRequired && <p className="text-red-500 text-xs mt-2">Phone Number is required.</p>}
            {/* <input
            name="phone"
            value={phone}
            className={`shadow appearance-none border ${!emailValid ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="email"
            placeholder="email@example.com"
            onChange={handleChange}
          /> */}
          </div>

          <div className="mb-4 ml-4 mr-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">I am interested in:</label>
            <div className="relative">
              <select
                name="inquiry"
                value={inquiry}
                onChange={handleChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>I am looking for:</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Massage Services">Massage Services</option>
                <option value="Feedback">Feedback</option>
                <option value="Promotions and Discounts">Promotions and Discounts</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-6 ml-4 mr-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Message for Harmony Wellness & Spa"
              value={message}
              onChange={handleChange}
              rows={5}
            ></textarea>
            {messageRequired && <p className="text-red-500 text-xs mt-2">Message is required.</p>}
          </div>

          <div className="flex items-center justify-center space-x-2">
            <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send
            </button>
            <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
