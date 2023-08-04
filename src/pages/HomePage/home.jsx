import './home.css'

import React from 'react'
import { useSelector } from 'react-redux'

import HomeHeaderComponent from '../../components/homeComponent/homeHeader'
import ContactComponent from '../../components/contactComponent/contact'
import AboutComponent from '../../components/AboutComponent/about'
import ProjectComponent from '../../components/ProjectComponent/project'

import { persian } from '../../data'
import { english } from '../../data'

const HomePage = () => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  return (
    <>
    {(ui.language == 'persian' ?
    persian[6] : english[6])
      .map((li) => {
        return (
          <section key={li.aboutTitle} language={ui.language} className='Homesection' style={{fontFamily: `${styles}`}}>
            <HomeHeaderComponent />
            <div id='about' className='Homep'>
              <div className='HomepTitlec'>
                <h1 className='HomepTitle'>{li.aboutTitle}</h1>
                <p className='HomepDis'>{li.aboutDis}</p>
              </div>
            <AboutComponent />
            </div>
            <div className='Homep'>
              <div className='HomepTitlec'>
                <h1 className='HomepTitle'>{li.ProjectsTitle}</h1>
                <p className='HomepDis'>{li.ProjectsDis}</p>
              </div>
              <ProjectComponent homeedition='true' />
            </div>
            <div className='Homep'>
              <div className='HomepTitlec'>
                <h1 className='HomepTitle'>{li.ContactTitle}</h1>
                <p className='HomepDis'>{li.ContactDis}</p>
              </div>
            <ContactComponent homeedition='true' />
            </div>
          </section>
        )
      })
    }
    </>
  )
}

export default HomePage