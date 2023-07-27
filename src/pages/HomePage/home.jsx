import React from 'react'
import { useSelector } from 'react-redux'

import HomeHeaderComponent from '../../components/homeComponent/homeHeader'
import ContactComponent from '../../components/contactComponent/contact'
import AboutComponent from '../../components/AboutComponent/about'
import ProjectComponent from '../../components/ProjectComponent/project'

const HomePage = () => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  return (
    <section style={{fontFamily: `${styles}`}}>
      <HomeHeaderComponent />
      <AboutComponent />
      <ProjectComponent homeEdition={true} />
      <ContactComponent />
    </section>
  )
}

export default HomePage