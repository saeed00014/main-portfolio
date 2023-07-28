import './alert.css'

import React from 'react'

const AlertComponent = ({result}) => {
  return (
    <div>{result.status}{result.text}</div>
  )
}

export default AlertComponent