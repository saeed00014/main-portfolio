import './contact.css'

import React from 'react'
import { useSelector } from 'react-redux'

import ContactComponent from '../../components/contactComponent/contact'

const ContactPage = ({homeEdition}) => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font
  console.log(homeEdition)

  return (
    <section style={{fontFamily: styles}} className='Contactsection'>
      <ContactComponent homeEdition={homeEdition} />
    </section>
  )
}

export default ContactPage