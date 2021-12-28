import {
  GET_PARTICIPANTS,
  GET_PARTICIPANT,
  PARTICIPANT_ERROR,
  CLEAR_PARTICIPANT,
  GET_VOTE,
  VOTE_ERROR,
} from './types'
import axios from 'axios'
import { setAlert } from './alert'
import { loadUser } from './auth'

// const api = 'http://localhost:5000/api'
const api = 'https://eurovision-2021-api.herokuapp.com/api'

// Get all participants
export const getParticipants = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/participants`)
    dispatch({
      type: GET_PARTICIPANTS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: 'Something went wrong getting participants',
    })
  }
}

// Get participant by id
export const getParticipant = (id, history) => async (dispatch) => {
  dispatch({ type: CLEAR_PARTICIPANT })
  try {
    const res = await axios.get(`${api}/participants/${id}`)

    dispatch({
      type: GET_PARTICIPANT,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: 'Something went wrong getting participant',
    })
    history.push('/not-found')
  }
}

// Vote on participant
export const voteOnParticipant = (id, vote) => async (dispatch) => {
  try {
    const res = await axios.post(`${api}/votes/${id}/${vote}`)
    dispatch({
      type: GET_VOTE,
    })
    dispatch(loadUser())
    dispatch(
      setAlert(`You gave ${vote} points to ${res.data.country.name}`, 'success')
    )
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: VOTE_ERROR,
    })
  }
}
