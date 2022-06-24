import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  var { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const form = useRef();

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.send("service_5ou4udn","template_yapyoo6", {email, name, message}, 'Bl-To2-JWLoD6rxHN')
      .then((result) => {
        console.log(result);
        setErrorMessage('Message successfully sent!');
        setFormState({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error);
        setErrorMessage('Something went wrong. Try sending me a direct email at corycareerwebdev@gmail.com')
      });
  }

  return (
    <section className='bg-color radius w-5/6 md:w-3/5 p-10'>
      <h1 className='text-3xl text-center'>Contact me</h1>
      <form ref={form} onSubmit={handleSubmit} className='flex flex-col items-center md:items-end md:w-2/3 m-4'>
        <div className='mobile-form py-4'>
          <label className='px-2' htmlFor="name">Name:</label>
          <input className='px-4' type="text" defaultValue={name} onChange={handleChange} name="name" required />
        </div>
        <div className='mobile-form py-4'>
          <label className='px-2' htmlFor="email">Email address:</label>
          <input className='px-4' type="email" defaultValue={email} onChange={handleChange} name="email" required/>
        </div>
        <div className='flex flex-wrap  mobile-form content-center py-4'>
          <label className='px-2' htmlFor="message">Message:</label>
          <textarea className='px-5' name="message" defaultValue={message} onChange={handleChange} rows="5" required/>
        </div>
        {errorMessage && (
          <div className='m-3'>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button className='bg-white p-1 px-2' type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;