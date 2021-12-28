import React from 'react'
import { Link } from 'react-router-dom'
import { getIcon } from '../../icons'

const ScoreboardItem = ({ participant, viewTable }) => {
  return (
    <div className='list-item'>
      <div className='item-info'>
        <span className='place'>
          {viewTable === 'Grand Final'
            ? participant.place
            : participant.semiPlace}
        </span>
        <img
          src={getIcon(participant.country.code)}
          alt={`${participant.country.name} flag`}
        />
        <Link to={`/history/${participant._id}`}>
          <h2 className='artist'>
            {participant.artist}{' '}
            <span className='hide-sm'>
              <em>"{participant.song}"</em>
            </span>
          </h2>
        </Link>
      </div>
      <div className='item-vote'>
        <h4>
          {viewTable === 'Grand Final'
            ? participant.points
            : participant.semiPoints}{' '}
          <span>points</span>
        </h4>
      </div>
    </div>
  )
}

export default ScoreboardItem
