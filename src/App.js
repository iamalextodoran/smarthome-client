import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
//Instead of BrowserRouter I have to use HashRouter for Github pages
import ReactDOM from "react-dom";
import Button from './components/Button';
import Input from './components/Input';
import Toggle from './components/Toggle';
import Radio from './components/Radio';
import Icon from './components/Icon';
import Header from './components/Header';
import User from './components/User';
import Menu from './components/Menu';
import Weather from './components/Weather';
import Light from './components/Light';
import Temperature from './components/Temperature';
import Music from './components/Music';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './components/Room';
import Devices from './pages/Devices';
import Settings from './pages/Settings';
import Register from './pages/Register';
import Login from './pages/Login';
import Top from './components/Top';
import Left from './components/Left';
import Toast, { notify } from './components/Toast';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/settings" render={(props) => (
            <React.Fragment>
              <Top />
              <div className="layout-column layout-align-start-center">
                <Settings />
              </div>
              <Footer />
            </React.Fragment>
          )} />

          <Route exact path="/" render={() => (
            <React.Fragment>
              <Top />
              <div className="layout-row layout-xs-column">
                <Left />
                <div className="layout-row layout-align-end-start flex-wrap flex-70">
                  <Home />
                </div>
              </div>
              <Footer />
            </React.Fragment>
          )} />

          <Route exact path="/rooms" render={() => (
            <React.Fragment>
              <Top />
              <div className="layout-row layout-xs-column">
                <Left />
                <div className="layout-row layout-align-end-start flex-wrap flex-70">
                  <Rooms />
                </div>
              </div>
              <Footer />
            </React.Fragment>
          )} />


          <Route exact path={`/room/:roomId`} component={Room} />

          <Route path="/devices" render={() => (
            <React.Fragment>
              <Top />
              <div className="layout-row layout-xs-column">
                <Left />
                <div className="layout-row layout-align-end-start flex-wrap flex-70">
                  <Devices />
                </div>
              </div>
              <Footer />

            </React.Fragment>
          )} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;