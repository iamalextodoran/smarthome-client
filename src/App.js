import React from 'react';
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
// import { BrowserRouter, Route, Link, Router } from "react-router-dom";

function App() {
  return (
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
            <Card title="Bedroom 2" img="https://manofmany.com/wp-content/uploads/2017/09/Masculine-Living-Room-Ideas-Inspirations-7.jpg" content="Not that hard, sometimes tricky, but not hard" buttonType="primary" buttonText="Get me there"/>
            <Card title="Guest room" img="https://media.architecturaldigest.com/photos/567899767fd9a58978b7c398/master/w_1600%2Cc_limit/the-perfect-guest-room-05.jpeg" content="Not that hard, sometimes tricky, but not hard" buttonType="accent" buttonText="Get me there"/>

            {/* <Card title="Guest room" content="Not that hard, sometimes tricky, but not hard" buttonType="primary" buttonText="Get me there"/>
            <Card title="Guest room" content="Not that hard, sometimes tricky, but not hard" buttonType="accent" buttonText="Get me there"/> */}
          </div>
          
        </div>


        <div className="layout-row layout-align-center-center">
          <Footer />
        </div>

      </div>
  );
}

export default App;