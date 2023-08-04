import './contact.css'

import React from 'react'
import { useSelector } from 'react-redux'

import ContactComponent from '../../components/contactComponent/contact'

const ContactPage = ({homeedition}) => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  return (
    <section style={{fontFamily: styles}} className='Contactsection'>
      <ContactComponent homeedition={homeedition ? homeedition : 'false'} />
    </section>
  )
}

export default ContactPage