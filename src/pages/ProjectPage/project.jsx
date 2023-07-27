import './project.css'

import React from 'react'
import { useSelector } from 'react-redux'

import ProjectComponent from '../../components/ProjectComponent/project'

const ProjectPage = () => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  return (
    <section style={{fontFamily: styles}} className='Projectsection'>
      <h1>Project .</h1>
      <ProjectComponent />
    </section>
  )
}

export default ProjectPage