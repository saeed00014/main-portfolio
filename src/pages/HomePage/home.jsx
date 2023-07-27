import React from 'react'

import HomeHeaderComponent from '../../components/homeComponent/homeHeader'
import ContactComponent from '../../components/contactComponent/contact'
import AboutComponent from '../../components/AboutComponent/about'
import ProjectComponent from '../../components/ProjectComponent/project'

const HomePage = () => {
  return (
    <>
      <HomeHeaderComponent />
      <AboutComponent />
      <ProjectComponent />
      <ContactComponent />
    </>
  )
}

export default HomePage