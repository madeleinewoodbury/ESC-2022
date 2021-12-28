import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <Fragment>
      <div className='spinner-container'>
        <img
          src={spinner}
          style={{ width: '300px', margin: 'auto', display: 'block' }}
          alt='Loading...'
        />
      </div>
    </Fragment>
  )
}

export default Spinner
