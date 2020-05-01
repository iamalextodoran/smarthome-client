import React, { Component } from 'react'
import Button from './Button';
import '../styles/default.scss'
import { NavLink } from "react-router-dom";
import Icon from './Icon';

export default class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="big layout-row layout-align-end-end" style={{ marginRight: "10px" }}>
          <NavLink exact activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/">Home</NavLink>
          <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/rooms">Rooms</NavLink>
          <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/devices">Devices</NavLink>
        </div>

        <div className="small" style={{ marginRight: "10px" }}>
          <NavLink exact style={{color: "black"}} activeStyle={{color: "coral"}} to="/"><Icon icon="fas fa-home" size="25"/></NavLink>
          <NavLink style={{color: "black"}} activeStyle={{color: "coral"}} to="/rooms"><Icon icon="fas fa-square" size="25" /></NavLink>
          <NavLink style={{color: "black"}} activeStyle={{color: "coral"}} to="/devices"><Icon icon="fas fa-toolbox" size="25" /></NavLink>
        </div>
      </React.Fragment>
    )
  }
}