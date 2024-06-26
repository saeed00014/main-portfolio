import './resume.css'

import React from 'react'

import persian from '../../images/perres.png'
import english from '../../images/engres.png'
import { useSelector } from 'react-redux'

import SideLoadingCommponent from '../SideLoadingCommponent/loading'

const ResumeComponent = () => {
  const ui = useSelector((state) => state.ui)

  return (
    <div language={ui.language} className='resumeImg'>
      <SideLoadingCommponent />
      {ui.language == 'persian' ? 
      <img src={persian} alt='persian resume' />
      : <img src={english} alt='english resume' />
      }
    </div>
  )
}

export default ResumeComponent