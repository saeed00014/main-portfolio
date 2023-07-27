import './homeHeader.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import { persian } from '../../data'
import { english } from '../../data'

const HomeHeaderComponent = () => {
  const ui = useSelector((state) => state.ui)

  return (
    <section className='HomeHeadersection'>
      <div className='HomeHeadercontainer'>
        <div className='HomeHeadercontent'>
          {(ui.language == 'persian' ?
          persian[1] : english[1])
          .map((li) => {
            return (
              <>
              <div className='HomeHeadertextContainer'>
                <div className='HomeHeaderh1C'>
                  <div className='HomeHeadertitle'>
                    <h1>{li.nameLeft}</h1> <h1>{li.nameRight}</h1> 
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className='HomeHeaderpC'>
                  <p>{li.disTop}</p>
                </div>
                <div className='HomeHeaderpC'>
                  <p>{li.disBottom}</p>
                </div>
              </div>
              <Link to='/contact' className='HomeHeadercontactLink'>
                {li.contact}
                <span></span>  
                <span></span>  
              </Link>
              <ul className='HomeHeadersocialLink'>
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
            </>
            )
          })}
        </div>
        <Link to='/#about' className='HomeHeaderspin'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
    </section>
  )
}

export default HomeHeaderComponent