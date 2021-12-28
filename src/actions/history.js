import { GET_HISTORY, GET_WINNERS, HISTORY_ERROR } from './types'
import axios from 'axios'
import { setAlert } from './alert'

const api = 'https://eurovision-song-contest-api.herokuapp.com/api/v1'

// Get winners
export const getWinners = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/participants/winners/list`)

    dispatch({
      type: GET_WINNERS,
      payload: res.data.data,
    })
  } catch (err) {
    dispatch({ type: HISTORY_ERROR, payload: err })
    dispatch(
      setAlert('Something went wrong trying to retrive participants', 'danger')
    )
  }
}

// Get history participant
export const getHistory = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/participants/${id}`)
    const countryRes = await axios.get(
      `${api}/countries/${res.data.data.country.id}`
    )
    const data = {
      _id: res.data.data._id,
      artist: res.data.data.artist,
      song: res.data.data.song,
      image: res.data.data.image,
      place: res.data.data.place,
      points: res.data.data.points,
      bio: res.data.data.bio,
      video: res.data.data.video,
      country: {
        _id: countryRes.data.data._id,
        name: countryRes.data.data.name,
        code: countryRes.data.data.code,
        flag: countryRes.data.data.flag,
        altIcon: countryRes.data.data.altIcon && countryRes.data.data.altIcon,
      },
      event: res.data.data.event,
    }

    dispatch({
      type: GET_HISTORY,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: HISTORY_ERROR, payload: err })
    dispatch(
      setAlert('Something went wrong trying to retrive participant', 'danger')
    )
    history.push('/not-found')
  }
}
