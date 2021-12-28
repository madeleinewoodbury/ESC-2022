import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getParticipants } from '../../actions/participants'
import Spinner from '../layout/Spinner'
import ParticipantCard from './ParticipantCard'
import './Participants.css'

const Participants = () => {
  const dispatch = useDispatch()
  const participantList = useSelector((state) => state.participants)
  const { participants, loading } = participantList

  const [show, setShow] = useState(1)
  const activeClass = 'btn btn-light active'
  const classes = 'btn btn-light'

  useEffect(() => {
    dispatch(getParticipants())
  }, [dispatch])

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='participants background'>
        <div className='banner'></div>
        <div className='content'>
          <div className='overlay'>
            <div className='container'>
              <div className='btn-container'>
                <button
                  onClick={(e) => setShow(1)}
                  className={show === 1 ? activeClass : classes}
                >
                  All Participants
                </button>
                <button
                  onClick={(e) => setShow(2)}
                  className={show === 2 ? activeClass : classes}
                >
                  First Semifinal
                </button>
                <button
                  onClick={(e) => setShow(3)}
                  className={show === 3 ? activeClass : classes}
                >
                  Second Semifinal
                </button>
                <button
                  onClick={(e) => setShow(4)}
                  className={show === 4 ? activeClass : classes}
                >
                  Final
                </button>
              </div>
              <div className='card-container'>
                {show === 1 &&
                  participants.map((participant) => (
                    <ParticipantCard
                      key={participant._id}
                      participant={participant}
                    />
                  ))}
                {show === 2 &&
                  participants.map((participant) => {
                    if (participant.semifinal === 'First Semifinal') {
                      return (
                        <ParticipantCard
                          key={participant._id}
                          participant={participant}
                        />
                      )
                    } else {
                      return null
                    }
                  })}
                {show === 3 &&
                  participants.map((participant) => {
                    if (participant.semifinal === 'Second Semifinal') {
                      return (
                        <ParticipantCard
                          key={participant._id}
                          participant={participant}
                        />
                      )
                    } else {
                      return null
                    }
                  })}
                {show === 4 &&
                  participants.map((participant) => {
                    if (participant.final) {
                      return (
                        <ParticipantCard
                          key={participant._id}
                          participant={participant}
                        />
                      )
                    } else {
                      return null
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Participants
