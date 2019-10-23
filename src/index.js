import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import firebase from './firebase'

import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'


class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.info(this.props)
      if (user) {
        this.props.history.push('/')
      }
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
    )
  }
}

const RootWithAuth = withRouter(Root)

const root = document.getElementById('root')

ReactDOM.render(
<Router>
  <RootWithAuth/>
</Router>, root)
