import './contact.css'

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

import { persian } from '../../data';
import { english } from '../../data';
import AlertComponent from '../AlertComponent/alert';

const ContactComponent = ({homeEdition}) => {
  const [alert, setAlert] = useState('')
  const [edition, setEdition] = useState('')
  const ui = useSelector((state) => state.ui)
  const form = useRef();

  
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log('sss')
    
    emailjs.sendForm('service_h32hvev', 'template_qe6dp0i', form.current, 'JcRK8-MYkgHcGvr_7')
    .then((result) => {
      setAlert(result)
    }, (error) => {
      console.log(error)
      setAlert(error)
    });
  }

  useEffect(() => {
    if(homeEdition) {
      setEdition('true')
    }else {
      setEdition('false')
    }
  }, [homeEdition])
  
  useEffect(() => {
    setTimeout(() => {
      setAlert('')
    }, 2000)
  }, [alert])

  return (
    <div language={ui.language} className='FormContainer'>
      {(ui.language == 'persian' ?
        persian[3] : english[3])
        .map((li) => {
          return (
            <form homeEdition={edition} ref={form} onSubmit={sendEmail}>
              {homeEdition != 'true' && 
                <>
                  <h1>{li.title}</h1>
                  <p>{li.text}</p>
                </>
              }
              <label>{li.name}</label>
              <input style={{fontFamily: ui.font}} type="text" name="user_name" />
              <label>{li.email}</label>
              <input style={{fontFamily: ui.font}} type="email" name="user_email" />
              <label>{li.message}</label>
              <textarea style={{fontFamily: ui.font}} type='text' name="message" />
              <input style={{fontFamily: ui.font}} type="submit" value={li.submit} />
            </form>
          )
        })}
        {alert && <AlertComponent result={alert} />}
    </div>
  )
}

export default ContactComponent