import './contact.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

import { persian } from '../../data';
import { english } from '../../data';

const ContactComponent = () => {
  const ui = useSelector((state) => state.ui)
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log('sss')

    emailjs.sendForm('service_h32hvev', 'template_qe6dp0i', form.current, 'JcRK8-MYkgHcGvr_7')
    .then((result) => {
        console.log('show the user a success message')
      }, (error) => {
        console.log('show the user')
        // show the user an error
    });
  }

  return (
    <div className='FormContainer'>
      {(ui.language == 'persian' ?
        persian[3] : english[3])
        .map((li) => {
          return (
            <form ref={form} onSubmit={sendEmail}>
              <h1>
                {li.title}
              </h1>
              <label>{li.name}</label>
              <input type="text" name="user_name" />
              <label>{li.email}</label>
              <input type="email" name="user_email" />
              <label>{li.message}</label>
              <textarea name="message" />
              <input type="submit" value={li.submit} />
            </form>
          )})}
    </div>
  )
}

export default ContactComponent