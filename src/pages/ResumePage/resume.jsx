import './resume.css'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import axios from 'axios'

import ResumeComponent from '../../components/ResumeComponent/resume'
import SideLoadingCommponent from '../../components/SideLoadingCommponent/loading'
import AlertComponent from '../../components/AlertComponent/alert'

import { english } from '../../data'
import { persian } from '../../data'

const ResumePage = () => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  const handleSideLoading = (link) => {
    setLoading(true)
    axios.post(link, 
  )
    .then(() => {
      setLoading(false)
      setAlert(true)
    }, () => {
      setLoading(false)
      setAlert(false)
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 2000) 
  }, [alert])

  return (
    <section language={ui.language} style={{fontFamily: styles}} className='Resumesection'>
      {(ui.language == 'persian' ?
        persian[2] : english[2])
        .map((li) => {
          return (
            <div key={li.title} className='Resumehead'>
              <h1>{li.title}</h1>
              <ResumeComponent />
              <div>
                <button onClick={() => handleSideLoading(li.link)}>
                  {loading && <SideLoadingCommponent />}{li.dis}
                </button>
              </div>
            </div>  
          )
        })}
        {alert && <AlertComponent result={alert} />}
    </section>
  )
}

export default ResumePage