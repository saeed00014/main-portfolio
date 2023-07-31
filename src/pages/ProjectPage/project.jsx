import './project.css'

import React from 'react'
import { useSelector } from 'react-redux'

import ProjectComponent from '../../components/ProjectComponent/project'

const ProjectPage = () => {
  const ui = useSelector((state) => state.ui)
  const styles = ui.font

  return (
    <section language={ui.language} style={{fontFamily: styles}} className='Projectsection'>
      {ui.language == 'persian' ? <h1>پروژه ها</h1>
      : <h1>Project .</h1>
      }
      <ProjectComponent />
    </section>
  )
}

export default ProjectPage