import './homeHeader.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import { persian } from '../../data'
import { english } from '../../data'

const HomeHeaderComponent = () => {
  const ui = useSelector((state) => state.ui)

  return (
    <section language={ui.language} className='HomeHeadersection'>
      <div className='HomeHeadercontainer'>
        <div className='HomeHeadercontent'>
          {(ui.language == 'persian' ?
          persian[1] : english[1])
          .map((li) => {
            return (
              <>
              <div key={li.language} className='HomeHeadertextContainer'>
                <div className='HomeHeaderh1C'>
                  <div className='HomeHeadertitle'>
                    <div className='h1Title'>
                      {li.nameLeft.map((letter) => {
                        return (
                          <h1>{letter}</h1>
                        )
                      })
                      }
                    </div>
                    <div className='h1Title'>
                    {li.nameRight.map((letter, e) => {
                        return (
                          <h1>{letter}</h1>
                        )
                      })
                      }
                    </div>
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
        <HashLink to='/#about' className='HomeHeaderspin'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </HashLink>
      </div>
    </section>
  )
}

export default HomeHeaderComponent