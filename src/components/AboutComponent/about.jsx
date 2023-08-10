import './about.css'

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { persian } from '../../data'
import { english } from '../../data'

const AboutComponent = () => {
  const ui = useSelector((state) => state.ui)
  return (
    <div language={ui.language} className='AboutContainer'>
      {(ui.language == 'persian' ?
      persian[4] : english[4])
      .map((li) => {
        return (
          <div key={li.title} className='Aboutcontent'>
            <div className='AboutaboutLeft'>
              <h1>{li.title}</h1>
              <p>{li.dis}</p>
              <p>{li.dis1}</p>
              <Link to='/project'
                onClick={() => {
                  window.scroll({
                    top: 0,
                  });
                }}
              >
                <span></span>
                <span></span>
                {li.button}
              </Link>
            </div>
            <div className='AboutaboutRight'>
              <h1>{li.titleSkill}</h1>
              <div className='Aboutskills'>
                {li.skills.map((skill) => {
                  return (
                    <div key={skill}>
                      <span className='Aboutskill'>{skill}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
      )})}
    </div>
  )
}

export default AboutComponent