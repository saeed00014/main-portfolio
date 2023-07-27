import './contact.css'

import React from 'react'
import { useSelector } from 'react-redux'

import ContactComponent from '../../components/contactComponent/contact'

const ContactPage = () => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  return (
    <section style={{fontFamily: styles}} className='Contactsection'>
      <ContactComponent />
    </section>
  )
}

export default ContactPage