import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompetitions } from '../../actions/competitions'
import Spinner from '../layout/Spinner'
import CompetitionCard from './CompetitionCard'
import './Competitions.css'

const Competitions = () => {
  const dispatch = useDispatch()
  const competitionsList = useSelector((state) => state.competitions)
  const { competitions, loading } = competitionsList

  useEffect(() => {
    dispatch(getCompetitions())
  }, [dispatch])

  return (
    <Fragment>
      {loading || competitions.length < 1 ? (
        <Spinner />
      ) : (
        <div className='competitions background'>
          <div className='banner'></div>
          <div className='content'>
            <div className='overlay'>
              <div className='container'>
                <div className='container'>
                  <div className='card-container'>
                    {competitions.length > 0 &&
                      competitions.map((competition) => (
                        <CompetitionCard
                          key={competition._id}
                          competition={competition}
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

export default Competitions
