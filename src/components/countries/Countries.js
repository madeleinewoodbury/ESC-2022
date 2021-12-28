import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../actions/countries'
import Spinner from '../layout/Spinner'
import CountryCard from './CountryCard'
import './Countries.css'

const Countries = () => {
  const dispatch = useDispatch()
  const countriesList = useSelector((state) => state.countries)
  const { countries, loading } = countriesList

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <Fragment>
      {loading || countries.length < 1 ? (
        <Spinner />
      ) : (
        <div className='countries background'>
          <div className='banner'></div>
          <div className='content'>
            <div className='overlay'>
              <div className='container'>
                <div className='container'>
                  <div className='card-container'>
                    {countries.map((country) => (
                      <CountryCard
                        key={country._id}
                        country={country.name}
                        flag={country.flag}
                        id={country._id}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Countries
