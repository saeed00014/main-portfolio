import './header.css'

import { useState } from 'react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import { useDispatch, useSelector } from 'react-redux'
import { languageState } from '../../store/UiSlice'

import { IR } from 'country-flag-icons/react/3x2'
import { US } from 'country-flag-icons/react/3x2'

import { persian } from '../../data'
import { english } from '../../data'

const Header = () => {
  const dispatch = useDispatch() 
  const ui = useSelector((state) => state.ui)

  const [hamb, setHamb] = useState(false)
  
  const handleHamb = () => {
    setHamb(!hamb)
  }

  const handleDelhamb = () => {
    setHamb(false)
  }

  const handleLanguage = (lang) => {
    dispatch(languageState(lang))
  }

  return (
    <header style={{fontFamily: ui.font}} className='Headerheader'>
    <div className='Headercontainer'>
      <div className='HeaderlogoContainer'>
        <Link onClick={handleDelhamb} to='/' >  
          <h1>Saeed</h1> 
        </Link>
      </div>
      <div className='HeadernavlinkContainer'>
        <ul hamb-state={hamb.toString()} className='Headernavlink'>
          <li>
            <button>
              {ui.language == 'persian' ?
                <IR onClick={() => handleLanguage('english')} title="Islamic Republic of Iran" className="..."/>
                :<US onClick={() => handleLanguage('persian')} title="United Kingdom" className="..."/>
              }
            </button>
          </li>
          {(ui.language == 'persian' ?
            persian[0] : english[0])
            .map((header) => {
              return (
                <li key={header.link} onClick={handleDelhamb}>
                  <Link to={header.link} 
                    onClick={() => {
                      window.scroll({
                        top: 0,
                      });
                    }}
                  >
                    { hamb ? header.names : header.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <button className='languageButton'>
        {ui.language == 'persian' ?
          <IR onClick={() => handleLanguage('english')} title="Islamic Republic of Iran" className="..."/>
          :<US onClick={() => handleLanguage('persian')} title="United Kingdom" className="..."/>
        }
        </button>
      </div>
      <div onClick={handleHamb} className={hamb ? 'HeaderdelHamb' : 'Headerhambargar'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {hamb && 
        <ul className='HeadersocialLink'>
          <li>
            <a href="mailto:saeedm00014@gmail.com">
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <a href='https://github.com/saeed00014' target="_blank">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href='https://github.com/saeed00014' target="_blank">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href='https://github.com/saeed00014' target="_blank">
              <AiFillInstagram />
            </a>
          </li>
        </ul>}
    </div>
  </header>
  )
}

export default Header 