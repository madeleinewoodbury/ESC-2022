import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getParticipantsByEvent } from '../../actions/scoreboard'
import { getCompetition } from '../../actions/competitions'
import ScoreboardItem from './ScoreboardItem'
import Spinner from '../layout/Spinner'
import './Scoreboard.css'

const Scoreboard = ({ match }) => {
  const dispatch = useDispatch()
  const scoreboardList = useSelector((state) => state.scoreboard)
  const competitionList = useSelector((state) => state.competitions)
  const { scoreboard, loading } = scoreboardList
  const { competition } = competitionList
  const [sortDown, toggleSortDown] = useState(true)
  const [viewTable, setViewTable] = useState('Grand Final')

  useEffect(() => {
    dispatch(getParticipantsByEvent(match.params.id))
    dispatch(getCompetition(match.params.id))
  }, [dispatch, match.params.id])

  const getResults = () => {
    let results = []
    if (viewTable === 'Grand Final') {
      results = sortDown
        ? scoreboard.final.sort((a, b) => (a.points < b.points ? 1 : -1))
        : scoreboard.final.sort((a, b) => (a.points > b.points ? 1 : -1))
    } else if (viewTable === 'First Semifinal') {
      results = sortDown
        ? scoreboard.semifinal1.sort((a, b) =>
            a.semiPoints < b.semiPoints ? 1 : -1
          )
        : scoreboard.semifinal1.sort((a, b) =>
            a.semiPoints > b.semiPoints ? 1 : -1
          )
    } else {
      results = sortDown
        ? scoreboard.semifinal2.sort((a, b) =>
            a.semiPoints < b.semiPoints ? 1 : -1
          )
        : scoreboard.semifinal2.sort((a, b) =>
            a.semiPoints > b.semiPoints ? 1 : -1
          )
    }

    return results.map((participant) => (
      <ScoreboardItem
        key={participant._id}
        participant={participant}
        viewTable={viewTable}
      />
    ))
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className='scoreboard background'>
      <div className='banner'></div>
      <div className='content'>
        <div className='overlay'>
          <div className='container'>
            <h1 className='large'>
              Scoreboard {competition && competition.year}
            </h1>
            {scoreboard.semifinal1 && (
              <div className='scoreboard-btns'>
                <button
                  onClick={(e) => setViewTable('First Semifinal')}
                  className={
                    viewTable === 'First Semifinal' ? 'btn active' : 'btn'
                  }
                >
                  First Semifinal
                </button>
                {scoreboard.semifinal2 && (
                  <button
                    onClick={(e) => setViewTable('Second Semifinal')}
                    className={
                      viewTable === 'Second Semifinal' ? 'btn active' : 'btn'
                    }
                  >
                    Second Semifinal
                  </button>
                )}

                <button
                  onClick={(e) => setViewTable('Grand Final')}
                  className={viewTable === 'Grand Final' ? 'btn active' : 'btn'}
                >
                  Grand Final
                </button>
              </div>
            )}

            <div className='list'>
              <div className='list-item'>
                <div className='item-title'>
                  <h2>{viewTable}</h2>
                </div>
                <div className='item-vote'>
                  <button
                    onClick={(e) => toggleSortDown(!sortDown)}
                    className='btn btn-primary'
                  >
                    {sortDown ? (
                      <span>
                        Sort <i className='fas fa-arrow-up'></i>
                      </span>
                    ) : (
                      <span>
                        Sort <i className='fas fa-arrow-down'></i>
                      </span>
                    )}
                  </button>
                </div>
              </div>
              {getResults()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
