import './skills.css'

import React from 'react'
import CardComponent from '../../components/SkillsComponent/card'
import AboutComponent from '../../components/AboutComponent/about'

const SkillsPage = () => {
  return (
    <section className='skillssection'>
      <AboutComponent skillsedition ='true' />
      <div className='skillscontainer'>
        <h1 className='skillscontainerh1'>restful-api</h1>
        <p>this is a shopping card ive made to show my restapi skills</p>
        <p>
          address to api &rarr;
          <a href="https://bodybuild-api.cyclic.cloud/card/" target='_blank'>
            https://bodybuild-api.cyclic.cloud/card/
          </a>
        </p> 
        <p>
          api backend &rarr;
          <a href="https://github.com/saeed00014/bodybuild-api">
            github
          </a>
        </p>
        <CardComponent />
      </div>
      <p>the rest is under development...</p>
    </section>
  )
}

export default SkillsPage