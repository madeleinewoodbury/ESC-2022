import { GET_SCOREBOARD, SCOREBOARD_ERROR } from '../actions/types'

const initialState = {
  scoreboard: [],
  loading: true,
  error: {},
}

const scoreboardReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_SCOREBOARD:
      return {
        ...state,
        scoreboard: payload,
        loading: false,
      }
    case SCOREBOARD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default scoreboardReducer
