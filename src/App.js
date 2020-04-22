import React from 'react';
import ReactDOM from "react-dom";
// import Button from './components/Button';
import Card from './components/Card';
// import Input from './components/Input';
// import Toggle from './components/Toggle';
// import Radio from './components/Radio';
// import Icon from './components/Icon';
import User from './components/User';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
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
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
      <div>

        <div className="layout-row layout-align-end-end">
          <Header />
        </div>

        <div className="layout-row layout-align-space-between-center">
          <User name="Alex" picture="https://source.unsplash.com/800x800/?man,face"/>
          <Menu />
        </div>

        <div className="layout-row layout-xs-column">

          <div className="layout-column layout-align-start-end flex-30">
            <Weather />
            <Light />
            <Temperature />
            <Music />
          </div>

          <div className="layout-row layout-align-space-between-start flex-70">

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/rooms" component={Rooms}/>
              <Route path="/devices" component={Devices}/>

              <Route path="/settings" component={Settings}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route component={Page404}/>
            </Switch>

          </div>
          
        </div>


        <div className="layout-row layout-align-center-center">
          <Footer />
        </div>

      </div>
    </Router>
  );
}
export default App;