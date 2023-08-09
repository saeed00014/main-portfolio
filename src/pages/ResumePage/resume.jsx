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
    axios.get(link, )
    .then(() => {
      console.log('f')
      setLoading(false)
    }, () => {
      console.log('f')
      setLoading(false)
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 2000) 
  }, [])

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
                <a href={li.link} download onClick={() => handleSideLoading(li.link)}>
                  {loading && <SideLoadingCommponent />}{li.dis}
                </a>
              </div>
            </div>  
          )
        })}
        {alert && <AlertComponent result={alert} />}
    </section>
  )
}

export default ResumePage