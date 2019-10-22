import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Switch>
  </Router>
)
const root = document.getElementById('root')

ReactDOM.render(<Root />, root)
