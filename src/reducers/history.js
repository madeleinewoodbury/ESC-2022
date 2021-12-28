import { GET_HISTORY, GET_WINNERS, HISTORY_ERROR } from '../actions/types'

const initialState = {
  participant: null,
  participants: [],
  loading: true,
  error: {},
}

const historyReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_HISTORY:
      return {
        ...state,
        participant: payload,
        loading: false,
      }
    case GET_WINNERS:
      return {
        ...state,
        participants: payload,
        loading: false,
      }
    case HISTORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default historyReducer
