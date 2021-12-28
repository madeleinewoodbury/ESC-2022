import React from 'react'
import Countdown from '../utils/Countdown'

const Landing = () => {
  return (
    <div className='landing background'>
      <div className='banner'></div>
      <div className='content'>
        <div className='overlay'>
          <div className='container'>
            <Countdown
              timeTillDate={new Date('May 22, 2021 21:00:00').getTime()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
