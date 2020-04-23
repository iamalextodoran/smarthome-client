import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Button from './components/Button';
import Card from './components/Card';
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
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Devices from './pages/Devices';
import Settings from './pages/Settings';
import Register from './pages/Register';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Top from './components/Top';
import Left from './components/Left';

function App() {
  return (
    <Router>
      <div>
        <Top/>
        <div className="layout-row layout-xs-column">
          <Left/>
          <div className="layout-row layout-align-space-between-start flex-70">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/rooms" component={Rooms}/>
              <Route path="/devices" component={Devices}/>

              {/* <Route path="/settings" component={Settings}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route component={Page404}/> */}
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;