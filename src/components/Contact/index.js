import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';
import eimg from '../../assets/images/mail-100.png';
import pimg from '../../assets/images/phone-100.png';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  var { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

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

    emailjs.send("service_5ou4udn", "template_yapyoo6", { email, name, message }, 'Bl-To2-JWLoD6rxHN')
      .then((result) => {
        console.log(result);
        setErrorMessage('Message successfully sent!');
      }, (error) => {
        console.log(error);
        setErrorMessage('Something went wrong. Try sending me a direct email at corycareerwebdev@gmail.com')
      });
  }

  return (
    <section className='flex flex-wrap flex-col md:flex-row justify-evenly bg-color radius w-5/6 md:w-2/3 p-10'>
      <h1 className='text-3xl text-white text-center w-full pb-4'>Contact me</h1>
      <div className='md:flex md:flex-col md:justify-center md:w-1/3'>
        <div className='pb-4'>
          <a className='text-center' href='mailto:corycareerwebdev@gmail.com'><img className='block mx-auto' src={eimg} alt='email icon'></img></a>
          <p className='text-center'>@ cory.c.hall89@gmail.com</p>
        </div>
        <div className=''>
          <a className='text-center' href='tel:319-850-8214'><img className='block mx-auto' src={pimg} alt='phone icon'></img></a>
          <p className='text-center'>@ 319-850-8214</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='md:flex md:flex-col md:justify-start md:w-1/3 md:m-4'>
        <div className='mobile-form py-4'>
          <label className='px-2' htmlFor="name">Name:</label><br></br>
          <input className='px-4' type="text" defaultValue={name} onBlur={handleChange} name="name" required />
        </div>
        <div className='mobile-form py-4'>
          <label className='px-2' htmlFor="email">Email address:</label><br></br>
          <input className='px-4' type="email" defaultValue={email} onBlur={handleChange} name="email" required />
        </div>
        <div className='flex flex-col mobile-form content-center py-4'>
          <label className='px-2' htmlFor="message">Message:</label>
          <textarea className='px-5' name="message" defaultValue={message} onBlur={handleChange} rows="5" required />
        </div>
        {errorMessage && (
          <div className='m-3'>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button className=' block bg-white p-1 px-2 mr-auto' type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;