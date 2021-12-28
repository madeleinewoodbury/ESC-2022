import React from 'react'
import { Link } from 'react-router-dom'
import { getIcon } from '../../icons'

const ParticipantCard = ({ participant, winners = false }) => {
  const { _id, country, artist, song, image } = participant

  return (
    <div className='card'>
      <div className='card-img'>
        <Link
          to={winners ? `/history/${_id}` : `/participants/${_id}`}
          className='img-link'
        >
          <img
            src={image}
            onError={(e) =>
              (e.target.src =
                'https://res.cloudinary.com/dsliohzpe/image/upload/v1612177797/ESC-2021/placeholder_jlghg4.jpg')
            }
            alt={artist}
          />
        </Link>
      </div>
      <div className='card-content'>
        {winners ? (
          <div className='card-pill'>
            <Link to={`/competitions/${participant.event._id}`}>
              {participant.event.city} {participant.event.year}
            </Link>
          </div>
        ) : (
          <div className='card-pill'>
            <img
              className='small-icon'
              src={getIcon(country.code)}
              alt={`${country.name} flag`}
            />
            <Link to={`/countries/${country._id}`}>{`${country.name}`}</Link>
          </div>
        )}

        <div className='card-info'>
          {winners ? (
            <div className='winner-link'>
              <img src={getIcon(country.code)} alt={`${country.name} flag`} />
              <Link to={`/history/${_id}`}>{artist}</Link>
            </div>
          ) : (
            <Link to={`/participants/${_id}`}>{artist}</Link>
          )}
          <span>
            <em>"{song}"</em>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ParticipantCard
