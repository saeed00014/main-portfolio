import './project.css'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { persian } from '../../data'
import { english } from '../../data'
import { HashLink } from 'react-router-hash-link'

import ImgSliderComponent from '../ImgSlider/imgSlider'

const ProjectComponent = ({homeedition}) => {
  const [sideLoad, setSideLoad] = useState(true)
  const ui = useSelector((state) => state.ui)

  const [img, setImg] = useState('')
  const [img1, setImg1] = useState(false)

  const handleImg = (link) => {
    setImg(link)
    if(img1 == false) {
      setImg1(true)
    }else {
      setImg1(false)
    }
  }

  return (
    <>
    <div onLoad={() => setSideLoad(false)} language={ui.language} className="Projectcontainer"> 
      {img1 && 
      <div className='sliderContainer' onClick={handleImg}>
        <ImgSliderComponent img={img}/>
      </div>
      }
      {(ui.language == 'persian' ?
        persian[5] : english[5])
        .map((li) => {
          return (
            <div key={li.title} className="Projectcontent">
              <div className="ProjectprojectItself">
                <div className="Projectpic">
                  <img src={li.Link1} className="Projectlaptop" alt="laptop size" />
                  <img src={li.Link2} className="Projectphone" alt="phone size" />
                </div>
                <div className="Projectdetails">
                  <h3 className="ProjectprojectName">{li.title}</h3>
                  <p className="Projectdis">{li.dis}</p>
                  <div className="Projectskills">
                    {li.skills.map((skill) => {
                      return (
                        <div key={skill}>
                          <span className="Projectskill">{skill}</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="ProjectprojectLink">
                    {li.links.map((liLink) => {
                      return (
                        <a key={liLink.name} className="ProjectvisitSite" href={liLink.link} target="_blank" >
                          {liLink.name}
                          <span></span>
                        </a>
                      )
                    })}
                    {homeedition &&
                      <HashLink className='ProjectvisitSite' to={li.HashLinks}>
                        <span></span>
                        {li.button}
                      </HashLink>
                    }
                  </div>
                </div>
              </div>
              {!homeedition &&
              <>
                <div id={li.id} className="ProjectperviewTitle">
                  <h2>
                    <svg width="16" height="40" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99999 18C6.46955 18 5.96085 17.7893 5.58577 17.4142C5.2107 17.0391 4.99999 16.5304 4.99999 16V13.61C5.00042 12.9513 4.83816 12.3027 4.52764 11.7218C4.21712 11.1408 3.76793 10.6456 3.21999 10.28L2.79999 10L3.21999 9.72C3.76793 9.35442 4.21712 8.85917 4.52764 8.27825C4.83816 7.69733 5.00042 7.04871 4.99999 6.39V4C4.99999 3.46957 5.2107 2.96086 5.58577 2.58579C5.96085 2.21071 6.46955 2 6.99999 2C7.2652 2 7.51956 1.89464 7.70709 1.70711C7.89463 1.51957 7.99999 1.26522 7.99999 1C7.99999 0.734784 7.89463 0.48043 7.70709 0.292893C7.51956 0.105357 7.2652 0 6.99999 0C5.93912 0 4.92171 0.421427 4.17156 1.17157C3.42142 1.92172 2.99999 2.93913 2.99999 4V6.39C3.00103 6.7202 2.92029 7.04552 2.765 7.33692C2.6097 7.62832 2.38467 7.87674 2.10999 8.06L0.449988 9.17C0.313865 9.26148 0.202329 9.38503 0.125209 9.52977C0.0480885 9.67451 0.00775146 9.836 0.00775146 10C0.00775146 10.164 0.0480885 10.3255 0.125209 10.4702C0.202329 10.615 0.313865 10.7385 0.449988 10.83L2.10999 11.94C2.38467 12.1233 2.6097 12.3717 2.765 12.6631C2.92029 12.9545 3.00103 13.2798 2.99999 13.61V16C2.99999 17.0609 3.42142 18.0783 4.17156 18.8284C4.92171 19.5786 5.93912 20 6.99999 20C7.2652 20 7.51956 19.8946 7.70709 19.7071C7.89463 19.5196 7.99999 19.2652 7.99999 19C7.99999 18.7348 7.89463 18.4804 7.70709 18.2929C7.51956 18.1054 7.2652 18 6.99999 18Z" fill="#6ec1e4"></path></svg>
                    {li.titlePerview}
                    <svg width="16" height="40" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55 9.17L5.89 8.06C5.61532 7.87674 5.39029 7.62832 5.23499 7.33692C5.07969 7.04552 4.99896 6.7202 5 6.39V4C5 2.93913 4.57857 1.92172 3.82843 1.17157C3.07828 0.421427 2.06087 0 1 0C0.734784 0 0.480429 0.105357 0.292892 0.292893C0.105356 0.48043 0 0.734784 0 1C0 1.26522 0.105356 1.51957 0.292892 1.70711C0.480429 1.89464 0.734784 2 1 2C1.53043 2 2.03914 2.21071 2.41421 2.58579C2.78929 2.96086 3 3.46957 3 4V6.39C2.99957 7.04871 3.16183 7.69733 3.47235 8.27825C3.78287 8.85917 4.23205 9.35442 4.78 9.72L5.2 10L4.78 10.28C4.23205 10.6456 3.78287 11.1408 3.47235 11.7218C3.16183 12.3027 2.99957 12.9513 3 13.61V16C3 16.5304 2.78929 17.0391 2.41421 17.4142C2.03914 17.7893 1.53043 18 1 18C0.734784 18 0.480429 18.1054 0.292892 18.2929C0.105356 18.4804 0 18.7348 0 19C0 19.2652 0.105356 19.5196 0.292892 19.7071C0.480429 19.8946 0.734784 20 1 20C2.06087 20 3.07828 19.5786 3.82843 18.8284C4.57857 18.0783 5 17.0609 5 16V13.61C4.99896 13.2798 5.07969 12.9545 5.23499 12.6631C5.39029 12.3717 5.61532 12.1233 5.89 11.94L7.55 10.83C7.68612 10.7385 7.79766 10.615 7.87478 10.4702C7.9519 10.3255 7.99224 10.164 7.99224 10C7.99224 9.836 7.9519 9.67451 7.87478 9.52977C7.79766 9.38503 7.68612 9.26148 7.55 9.17Z" fill="#6ec1e4"></path></svg>
                  </h2>
                </div>
                {li.video && 
                <div className='vidcontainer'>
                <p className='viddetails'>{li.viddetails}</p>
                <video width="100%" height="100%" controls>
                    <source src={li.video} type="video/mp4" />
                </video>
                </div>}
                {li.details.map((details) => {
                  return (
                    <div key={details.name} className="ProjectprojectPerview">
                      <div className="ProjectpartOne">
                        <div className="ProjectpartOneDetails">
                          <h1>{details.name}</h1>
                          <p>{details.dis}</p>
                        </div>
                        <div className='ProjectpartOneImg'>
                          <img onClick={() => handleImg(details.link)} src={details.link} alt="" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>
              }
            </div>
          )
        })}
    </div>
    </>
  )
}

export default ProjectComponent