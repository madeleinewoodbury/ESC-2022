import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

// Components
import Alert from './components/layout/Alert'
import Navbar from './components/layout/Navbar'
// import Landing from './components/layout/Landing'
import Dashboard from './components/dashboard/Dashboard'
import About from './components/info/About'
import History from './components/info/History'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Countries from './components/countries/Countries'
import Participants from './components/participants/Participants'
import Competitions from './components/competitions/Competitions'
import ParticipantPostcard from './components/postcard/ParticipantPostcard'
import CompetitionPostcard from './components/postcard/CompetitionPostcard'
import CountryPostcard from './components/postcard/CountryPostcard'
import Scoreboard from './components/scoreboard/Scoreboard'
import HistoryPostcard from './components/postcard/HistoryPostcard'
import Winners from './components/participants/Winners'
import NotFound from './components/layout/NotFound'
import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Participants} />
        <Alert />
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/about' component={About} />
          <Route exact path='/history' component={History} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/countries' component={Countries} />
          <Route exact path='/participants' component={Participants} />
          <Route exact path='/competitions' component={Competitions} />
          <Route exact path='/winners' component={Winners} />
          <Route
            exact
            path='/participants/:id'
            component={ParticipantPostcard}
          />
          <Route
            exact
            path='/competitions/:id'
            component={CompetitionPostcard}
          />
          <Route exact path='/countries/:id' component={CountryPostcard} />
          <Route exact path='/history/:id' component={HistoryPostcard} />
          <Route exact path='/scoreboard/:id' component={Scoreboard} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
