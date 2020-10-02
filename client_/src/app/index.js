import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'
import {MindstatsList } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/movies/list" exact component={MoviesList} />
        <Route path="/movies/create" exact component={MoviesInsert} />
        <Route
          path="/movies/update/:id"
          exact
          component={MoviesUpdate}
        />
        <Route path="/mindstats/list" exact component={MindstatsList} />
      </Switch>
    </Router>
  )
}

export default App