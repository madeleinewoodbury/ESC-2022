import { GET_SCOREBOARD, SCOREBOARD_ERROR } from './types'
import axios from 'axios'
import { setAlert } from './alert'

const api = 'https://eurovision-song-contest-api.herokuapp.com/api/v1'

// Get participants by event id
export const getParticipantsByEvent = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/events/${id}/participants`)
    const semifinal1 = res.data.data.filter((p) => p.semifinal === 1)
    const semifinal2 = res.data.data.filter((p) => p.semifinal === 2)
    const final = res.data.data.filter((p) => p.final)

    const data = {
      semifinal1: semifinal1.length > 0 && semifinal1,
      semifinal2: semifinal2.length > 0 && semifinal2,
      final: final,
    }

    dispatch({
      type: GET_SCOREBOARD,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: SCOREBOARD_ERROR })
    dispatch(
      setAlert('Something went wrong trying to retrive scoreboard', 'danger')
    )
  }
}
