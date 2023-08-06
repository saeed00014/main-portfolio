import './contact.css'

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

import { persian } from '../../data';
import { english } from '../../data';
import AlertComponent from '../AlertComponent/alert';

const ContactComponent = ({homeedition}) => {
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

  const onChange = (e) => {
    const ats = '@'
    console.log(e.target.value.includes(ats))
    if(e.target.name == 'message' && e.target.value.length < 9) {
      setError2(true)
    }else if (e.target.name == 'user_email' && !e.target.value.includes('@') && e.target.value.length < 3) {
      setError1(true)
    }else if (e.target.name == 'user_name' && e.target.value.length < 3 ) {
      setError(true)
    }if(e.target.name == 'message' && e.target.value.length >= 9) {
      setError2(false)
    }else if (e.target.name == 'user_email' && e.target.value.includes('@') && e.target.value.length >= 3) {
      setError1(false)
    }else if (e.target.name == 'user_name' && e.target.value.length >= 3) {
      setError(false)
    }
  }

  return (
    <div language={ui.language} className='FormContainer'>
      {(ui.language == 'persian' ?
        persian[3] : english[3])
        .map((li) => {
          return (
            <form key={li.title} homeedition={homeedition} ref={form} onSubmit={sendEmail}>
              {homeedition != 'true' && 
                <>
                  <h1>{li.title}</h1>
                  <p>{li.text}</p>
                </>
              }
              <label>{li.name}</label>
              <input 
                onChange={(e) => onChange(e)}
                style={{fontFamily: ui.font}}
                type="text" 
                name="user_name" 
                pattern="^[A-Za-z0-9]{3,12}$"
                required= {true}/>
                {error && <p>{ui.language == 'persian' 
                  ? 'باید بین 3 تا 12 حرف باشد' : 'must contain 3-12 characters'}</p>}
              <label>{li.email}</label>
              <input 
                onChange={(e) => onChange(e)}
                style={{fontFamily: ui.font}} 
                type="email" 
                name="user_email"
                required= {true}/>
                {error1 && <p>{ui.language == 'persian' 
                ? 'ایمیل موجود نیست' : 'not valid email'}</p>}
              <label>{li.message}</label>
              <textarea 
                onChange={(e) => onChange(e)}
                style={{fontFamily: ui.font}} 
                type='text' 
                name="message" 
                pattern="^[A-Za-z0-9]{9,212}$"
                required= {true}/>
                {error2 && <p>{ui.language == 'persian' 
                  ? 'باید بین 9 تا 212 حرف باشد' : 'must contain 9-212 characters'}</p>}
              <input style={{fontFamily: ui.font}} type="submit" value={li.submit} />
            </form>
          )
        })}
        {alert && <AlertComponent result={alert} content='contact' />}
    </div>
  )
}

export default ContactComponent