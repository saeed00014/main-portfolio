import './footer.css'

import React from 'react'
import { useSelector } from 'react-redux'

import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  return (
    <section style={{fontFamily: styles}}  className='Footersection'>
      <div className='Footercontainer'>
        <div className='FooterfooterTop'>
          <div className='Footertext'>
            <h5 >&lt;alive&gt;</h5>
            <div className='FootertextIn'>
              <h3>Eat Sleep Code  Repeat</h3>
            </div>
            <h5 >&lt;/alive&gt;</h5>
          </div>
          <div className='FooterfooterLink'>
            <ul className='FootersocialLink'>
              <li>
                <a href="saeedm00014@gmail.com">
                  <AiOutlineMail />
                </a>
              </li>
              <li>
                <a href='https://github.com/saeed00014'>
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href='https://github.com/saeed00014'>
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href='https://github.com/saeed00014'>
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='FooterfooterBottom'>2023-Made By Saeed saeedm00014@gmail.com</div>
      </div>
    </section>
  )
}

export default Footer