import './alert.css'

import React from 'react'
import { useSelector } from 'react-redux'

const AlertComponent = ({result}) => {
  const ui = useSelector((state) => state.ui)
  const text = result
  return (
    <>
      {text && 
        <div className='AlertOKcontainer'>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {ui.language == 'persian' ? <p>پیام شما با موفقیت ارسال شد</p>
          : <p>Your Massage has been Successfuly Sent</p>
          }
        </div>
      }
      {!text && 
        <div className='AlertFailedcontainer'>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {ui.language == 'persian' ? <p>پیام شماارسال نشد</p>
          : <p>Your Massage has not been Sent</p>
          }
        </div>
      }
    </>
  )
}

export default AlertComponent