import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import participantReducer from './reducers/participants'
import countryReducer from './reducers/countries'
import competitionsReducer from './reducers/competitions'
import authReducer from './reducers/auth'
import alertReducer from './reducers/alert'
import scoreboardReducer from './reducers/scoreboard'
import historyReducer from './reducers/history'

const reducer = combineReducers({
  participants: participantReducer,
  countries: countryReducer,
  competitions: competitionsReducer,
  auth: authReducer,
  alerts: alertReducer,
  scoreboard: scoreboardReducer,
  history: historyReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
