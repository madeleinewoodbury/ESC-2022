import {
  GET_PARTICIPANTS,
  GET_PARTICIPANT,
  PARTICIPANT_ERROR,
  CLEAR_PARTICIPANT,
  GET_VOTE,
  VOTE_ERROR,
} from '../actions/types'

const initialState = {
  participants: [],
  participant: null,
  loading: true,
  error: {},
}

const participantReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PARTICIPANTS:
    case GET_VOTE:
      return {
        ...state,
        participants: payload,
        loading: false,
      }
    case GET_PARTICIPANT:
      return {
        ...state,
        participant: payload,
        loading: false,
      }
    case CLEAR_PARTICIPANT:
      return {
        ...state,
        participants: [],
        participant: null,
        loading: false,
      }
    case PARTICIPANT_ERROR:
    case VOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default participantReducer
