import './imgSlider.css'

import React from 'react'

const ImgSliderComponent = ({img}) => {
  return (
    <>
    <div className='imgSliderContainer'>
      <div className='imgSliderContent'>
        <img src={img} alt="" />
      </div>
    </div>
    </>
  )
}

export default ImgSliderComponent