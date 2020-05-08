import React, { Component } from 'react'
import Button from './Button';
import '../styles/menu.scss'
import { NavLink } from "react-router-dom";
import Icon from './Icon';
import Dropdown from './Dropdown';

export default class Menu extends Component {
  state = {
    rooms: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/rooms`)
      .then(response => response.json())
      .then(data => this.setState({ rooms: data }))
  }

  render() {
    return (
      <React.Fragment>
        <div className="menu big layout-row layout-align-end-end">
          <NavLink exact activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/">Home</NavLink>
          <Dropdown name="Rooms">
            {this.state.rooms.map(room => <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to={'../room/' + room.id}>{room.name}</NavLink>)}
          </Dropdown>
          <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/devices">Devices</NavLink>
        </div>

        <div className="menu small">
          <NavLink exact className="menu-item" activeClassName="menu-item-active" to="/"><Icon icon="fas fa-home" size="25" /></NavLink>
          <Dropdown displayIcon icon="fas fa-square">
            {this.state.rooms.map(room => <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to={'../room/' + room.id}>{room.name}</NavLink>)}
          </Dropdown>
          <NavLink className="menu-item" activeClassName="menu-item-active" to="/devices"><Icon icon="fas fa-toolbox" size="25" /></NavLink>
        </div>
      </React.Fragment>
    )
  }
}