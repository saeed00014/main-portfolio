import './resume.css'

import React from 'react'
import { useSelector } from 'react-redux'

import ResumeComponent from '../../components/ResumeComponent/resume'

import { english } from '../../data'
import { persian } from '../../data'

const ResumePage = () => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  return (
    <section style={{fontFamily: styles}} className='Resumesection'>
      {(ui.language == 'persian' ?
        persian[2] : english[2])
        .map((li) => {
          return (
            <div className='Resumehead'>
              <h1>{li.title}</h1>
              <ResumeComponent />
              <a href={li.link}>{li.dis}</a>
            </div>  
          )
        })}
    </section>
  )
}

export default ResumePage