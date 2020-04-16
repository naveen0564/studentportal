import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Route , BrowserRouter as Router } from 'react-router-dom'
import CreateStudent from './components/createStudent';
import StudentPortal from './components/studentportal';

const routing = (
  <Router>
        <Route path = "/" component = {App}>
          <Route path="/" component={App} />
          <Route path="/allstudents" component={StudentPortal} />
          <Route path="/create" component={CreateStudent} />
        </Route>
  </Router>
)

ReactDOM.render(
  <div className="container">
  <React.StrictMode>
   {routing}
  </React.StrictMode></div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
