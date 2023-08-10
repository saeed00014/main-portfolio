import './notfound.css'

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { persian } from '../../data'
import { english } from '../../data'

const NotFoundPage = () => {
  const ui = useSelector((state) => state.ui)

  return (
    <section className='notfoundContainer'>
      {(ui.language == 'persian' ?
      persian[7] : english[7])
        .map((li) => {
          return (
            <>
              {li.text}
              <Link to='/'>
                {li.link}
              </Link>
            </>
          )
        })
      }
    </section>
  )
}

export default NotFoundPage