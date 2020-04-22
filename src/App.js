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
import Home from './Home';
import Rooms from './Rooms';
import Devices from './Devices';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

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

            <Route exact path="/" component={Home}/>

            <Route path="/rooms" component={Rooms}/>

            <Route path="/devices" component={Devices}/>

          </div>
          
        </div>


        <div className="layout-row layout-align-center-center">
          <Footer />
        </div>

      </div>
    </Router>
  );
}
const About = () => <h1>About Us</h1>
export default App;