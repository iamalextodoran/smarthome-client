import React, { Component } from 'react'
import Button from './Button';
import '../styles/default.scss'
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div className="layout-row layout-align-end-end" style={{marginRight: 10 + 'px'}}>
        
        <Link to="/"><Button text="Home" /></Link>
        <Link to="/rooms"><Button text="Rooms" /></Link>
        <Link to="/devices"><Button text="Devices" /></Link>
        
      </div>
    )
  }
}