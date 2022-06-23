import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
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

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className='bg-color radius w-2/3'>
      <h1 className='text-3xl text-center'>Contact me</h1>
      <form className='flex flex-col items-end m-4 w-2/3'>
        <div className='py-4'>
          <label className='px-2' htmlFor="name">Name:</label>
          <input className='px-4' type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div className='py-4'>
          <label className='px-2' htmlFor="email">Email address:</label>
          <input className='px-4' type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div className='flex content-center py-4'>
          <label className='px-2' htmlFor="message">Message:</label>
          <textarea className='px-5' name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div className='m-3'>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button className='bg-white p-1 px-2' type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;