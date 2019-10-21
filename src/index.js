import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter 
} from 'react-router-dom'

const root = document.getElementById('root')

ReactDOM.render(<App />, root);


