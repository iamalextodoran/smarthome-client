import React, { Component } from 'react'
import Button from './Button';
import '../styles/menu.scss'
import { NavLink } from "react-router-dom";
import Icon from './Icon';
import Dropdown from './Dropdown';

export default class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu big layout-row layout-align-end-end">
          <NavLink exact activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/">Home</NavLink>
          {/* <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/rooms">Rooms</NavLink> */}
          <Dropdown name="Rooms">
            <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to="../room/1">Room 1</NavLink>
            <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to="../room/2">Room 2</NavLink>
            <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to="../room/6">Room 6</NavLink>
          </Dropdown>
          <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/devices">Devices</NavLink>
        </div>

        <div className="menu small">
          <NavLink exact className="menu-item" activeClassName="menu-item-active" to="/"><Icon icon="fas fa-home" size="25" /></NavLink>
          {/* <NavLink className="menu-item" activeClassName="menu-item-active" to="/rooms"><Icon icon="fas fa-square" size="25" /></NavLink> */}
          <Dropdown displayIcon icon="fas fa-square">
            <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to="../room/1">Room 1</NavLink>
            <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to="../room/2">Room 2</NavLink>
            <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to="../room/6">Room 6</NavLink>
          </Dropdown>
          <NavLink className="menu-item" activeClassName="menu-item-active" to="/devices"><Icon icon="fas fa-toolbox" size="25" /></NavLink>
        </div>
      </React.Fragment>
    )
  }
}