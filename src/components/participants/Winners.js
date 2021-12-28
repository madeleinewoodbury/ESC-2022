import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWinners } from '../../actions/history'
import Spinner from '../layout/Spinner'
import ParticipantCard from './ParticipantCard'
import './Participants.css'

const Winners = () => {
  const dispatch = useDispatch()
  const historyParticipants = useSelector((state) => state.history)
  const { participants, loading } = historyParticipants

  useEffect(() => {
    dispatch(getWinners())
  }, [dispatch])
  return loading ? (
    <Spinner />
  ) : (
    <div className='participants background'>
      <div className='banner'></div>
      <div className='content'>
        <div className='overlay'>
          <div className='container'>
            <div className='card-container'>
              {participants.map((participant) => (
                <ParticipantCard
                  key={participant._id}
                  participant={participant}
                  winners
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winners
