import {
  GET_COMPETITION,
  GET_COMPETITIONS,
  COMPETITION_ERROR,
  CLEAR_COMPETITION,
} from '../actions/types'

const initialState = {
  competitions: [],
  competition: null,
  loading: true,
  error: {},
}

const competitionsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_COMPETITIONS:
      return {
        ...state,
        competitions: payload,
        loading: false,
      }
    case GET_COMPETITION:
      return {
        ...state,
        competition: payload,
        loading: false,
      }
    case CLEAR_COMPETITION:
      return {
        ...state,
        competitions: [],
        competition: null,
        loading: false,
      }
    case COMPETITION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default competitionsReducer
