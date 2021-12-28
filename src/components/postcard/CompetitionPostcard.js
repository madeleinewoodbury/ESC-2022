import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompetition } from '../../actions/competitions'
import { getIcon } from '../../icons'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import './Postcard.css'

const CountryPostcard = ({ match, history }) => {
  const dispatch = useDispatch()
  const competitionDetail = useSelector((state) => state.competitions)
  const { competition, loading } = competitionDetail

  useEffect(() => {
    dispatch(getCompetition(match.params.id, history))
  }, [dispatch, match.params.id, history])

  return (
    <Fragment>
      {competition === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='postcard-container'>
            <div className='banner'></div>
            <div className='postcard'>
              <div className='postcard-top'>
                <div className='postcard-hero'>
                  <div>
                    <img
                      className='postcard-img'
                      src={competition.image}
                      onError={(e) =>
                        (e.target.src =
                          'https://res.cloudinary.com/dsliohzpe/image/upload/v1612177797/ESC-2021/placeholder_jlghg4.jpg')
                      }
                      alt={competition.city}
                    />
                  </div>
                  <div>
                    <div className='postcard-title'>
                      <h2 className='competition-host'>
                        {competition.city} {competition.year}
                      </h2>
                      <img
                        className='postcard-logo'
                        src={competition.logo}
                        alt={competition.year}
                      />
                    </div>
                  </div>
                </div>
                <div className='postcard-info'>
                  <div>
                    <h3>Country</h3>
                    <div className='country-info'>
                      <img
                        className='small-icon'
                        src={getIcon(competition.country.code)}
                        alt={`${competition.country.name} flag`}
                      />
                      <Link to={`/countries/${competition.country._id}`}>
                        {competition.country.name}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3>Year</h3>
                    <span>{competition.year}</span>
                  </div>
                  <div>
                    <h3>City</h3>
                    <span>{competition.city}</span>
                  </div>
                  <div>
                    <h3>Presenter</h3>
                    <span>{competition.presenter}</span>
                  </div>
                  <div>
                    <h3>Winner</h3>
                    {competition.winner.length > 0 ? (
                      <Fragment>
                        {competition.winner.length > 1 ? (
                          competition.winner.map((winner) => (
                            <div key={winner._id} className='winner'>
                              <img
                                className='small-icon'
                                src={getIcon(winner.country.code)}
                                alt={`${winner.country.name} flag`}
                              />
                              <Link to={`/countries/${winner.country._id}`}>
                                <span>{winner.country.name}</span>
                              </Link>
                            </div>
                          ))
                        ) : (
                          <Fragment>
                            <div className='winner'>
                              <img
                                className='small-icon'
                                src={getIcon(
                                  competition.winner[0].country.code
                                )}
                                alt={`${competition.winner[0].country.name} flag`}
                              />
                              <Link
                                to={`/countries/${competition.winner[0].country._id}`}
                              >
                                <span>
                                  {competition.winner[0].country.name}
                                </span>
                              </Link>
                            </div>
                            <div className='winner-info'>
                              <Link
                                to={`/history/${competition.winner[0]._id}`}
                              >
                                <strong>{competition.winner[0].artist}</strong>
                                <em>"{competition.winner[0].song}"</em>
                              </Link>
                            </div>
                          </Fragment>
                        )}
                      </Fragment>
                    ) : competition.year === 2020 ? (
                      <span>No winner - Event cancelled</span>
                    ) : (
                      <span>TBA</span>
                    )}
                  </div>
                  <div className='results'>
                    <Link
                      to={`/scoreboard/${competition._id}`}
                      className='btn btn-dark'
                    >
                      View Results
                    </Link>
                  </div>
                </div>
              </div>

              <div className='postcard-content'>
                <div className='postcard-bio'>
                  {competition.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className='postcard-video'>
                  {competition.video && (
                    <iframe
                      title={competition.year}
                      src={`https://www.youtube.com/embed/${competition.video}`}
                      frameBorder='0'
                      allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default CountryPostcard
