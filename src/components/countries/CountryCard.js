import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country, flag, id }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <Link to={`/countries/${id}`} className='img-link'>
          <img src={flag} alt={country} />
        </Link>
      </div>
      <div className='card-content'>
        <div className='card-info'>
          <Link to={`/countries/${id}`}>{country}</Link>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
