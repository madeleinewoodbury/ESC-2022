import {
  GET_COUNTRY,
  GET_COUNTRIES,
  COUNTRY_ERROR,
  CLEAR_COUNTRY,
} from './types'
import axios from 'axios'
import { setAlert } from './alert'

const api = 'https://eurovision-song-contest-api.herokuapp.com/api/v1'

// Get all countries
export const getCountries = () => async (dispatch) => {
  dispatch({
    type: CLEAR_COUNTRY,
  })
  try {
    const res = await axios.get(`${api}/countries`)
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data.data,
    })
  } catch (err) {
    dispatch({ type: COUNTRY_ERROR })
    dispatch(
      setAlert('Something went wrong trying to retrive countries', 'danger')
    )
  }
}

// Get country by id
export const getCountry = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/countries/${id}`)
    const participations = await axios.get(
      `${api}/countries/${id}/participants`
    )
    const victories = participations.data.data.filter((year) => year.winner)

    const data = {
      _id: res.data.data._id,
      name: res.data.data.name,
      capital: res.data.data.capital,
      image: res.data.data.image,
      flag: res.data.data.flag,
      code: res.data.data.code,
      altIcon: res.data.data.altIcon && res.data.data.altIcon,
      firstParticipation: res.data.data.firstParticipation,
      bio: res.data.data.bio,
      video: res.data.data.video,
      events: res.data.data.events,
      participations: participations.data.count,
      victories: victories.length,
    }

    dispatch({
      type: GET_COUNTRY,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: COUNTRY_ERROR })
    dispatch(
      setAlert('Something went wrong trying to retrive country', 'danger')
    )
    history.push('/not-found')
  }
}
