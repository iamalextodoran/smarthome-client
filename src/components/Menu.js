import React, { Component } from 'react'
import Button from './Button';
import '../styles/default.scss'
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div className="layout-row layout-align-end-end" style={{marginRight: "10px"}}>

        <NavLink exact activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/">Home</NavLink>
        <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/rooms">Rooms</NavLink>
        <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/devices">Devices</NavLink>

      </div>
    )
  }
}