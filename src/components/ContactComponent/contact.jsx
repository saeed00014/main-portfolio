import './contact.css'

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

import { persian } from '../../data';
import { english } from '../../data';
import AlertComponent from '../AlertComponent/alert';

const ContactComponent = ({homeEdition}) => {
  const [alert, setAlert] = useState('')
  const ui = useSelector((state) => state.ui)
  const form = useRef();

  const [error, setError] = useState(false)
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_h32hvev', 'template_qe6dp0i', form.current, 'JcRK8-MYkgHcGvr_7')
    .then((result) => {
      setAlert(result)
    }, (error) => {
      setAlert(error)
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setAlert('')
    }, 2000)
  }, [alert])

  const onBlur = (e) => {
    console.log(e)
    if(e.target.name == 'message') {
      setError2(true)
    }else if (e.target.name == 'user_email') {
      setError1(true)
    }else {
      setError(true)
    }
  }

  return (
    <div language={ui.language} className='FormContainer'>
      {(ui.language == 'persian' ?
        persian[3] : english[3])
        .map((li) => {
          return (
            <form homeEdition={homeEdition} ref={form} onSubmit={sendEmail}>
              {homeEdition != 'true' && 
                <>
                  <h1>{li.title}</h1>
                  <p>{li.text}</p>
                </>
              }
              <label>{li.name}</label>
              <input 
                onBlur={(e) => onBlur(e)}
                style={{fontFamily: ui.font}}
                type="text" 
                name="user_name" 
                pattern="^[A-Za-z0-9]{3,12}$"
                errorMessage= {ui.language == 'persian' 
                  ? 'باید بین 3 تا 12 حرف باشد' : 'must contain 3-12 characters'}
                required= {true}/>
                {error && <p>{ui.language == 'persian' 
                  ? 'باید بین 3 تا 12 حرف باشد' : 'must contain 3-12 characters'}</p>}
              <label>{li.email}</label>
              <input 
                onBlur={(e) => onBlur(e)}
                style={{fontFamily: ui.font}} 
                type="email" 
                name="user_email"
                errorMessage= {ui.language == 'persian' 
                ? 'ایمیل موجود نیست' : 'not valid email'}
                required= {true}/>
                {error1 && <p>{ui.language == 'persian' 
                ? 'ایمیل موجود نیست' : 'not valid email'}</p>}
              <label>{li.message}</label>
              <textarea 
                onBlur={(e) => onBlur(e)}
                style={{fontFamily: ui.font}} 
                type='text' 
                name="message" 
                pattern="^[A-Za-z0-9]{9,212}$"
                errorMessage= {ui.language == 'persian' 
                  ? 'باید بین 3 تا 12 حرف باشد' : 'must contain 3-12 characters'}
                required= {true}/>
                {error2 && <p>{ui.language == 'persian' 
                  ? 'باید بین 3 تا 12 حرف باشد' : 'must contain 3-12 characters'}</p>}
              <input style={{fontFamily: ui.font}} type="submit" value={li.submit} />
            </form>
          )
        })}
        {alert && <AlertComponent result={alert} content='contact' />}
    </div>
  )
}

export default ContactComponent