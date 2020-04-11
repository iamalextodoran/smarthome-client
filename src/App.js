import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import Toggle from './components/Toggle';
import Radio from './components/Radio';
import Icon from './components/Icon';
import User from './components/User';
import Menu from './components/Menu';
import Footer from './components/Footer';
import MiniCard from './components/MiniCard';
import Header from './components/Header';

import { BrowserRouter, Route, Link, Router } from "react-router-dom";

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

        <div className="layout-row layout-align-center-end">
          <Card title="Bedroom 2" content="Not that hard, sometimes tricky, but not hard" buttonType="primary" buttonText="Get me there"/>
          <Card title="Guest room" content="Not that hard, sometimes tricky, but not hard" buttonType="accent" buttonText="Get me there"/>
          <Card title="Guest room" content="Not that hard, sometimes tricky, but not hard" buttonType="primary" buttonText="Get me there"/>
          <Card title="Guest room" content="Not that hard, sometimes tricky, but not hard" buttonType="accent" buttonText="Get me there"/>
        </div>
        <div className="layout-row layout-align-center-end">
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>


        <div className="layout-row layout-align-center-center">
          <Footer />
        </div>

      </div>
  );
}

export default App;