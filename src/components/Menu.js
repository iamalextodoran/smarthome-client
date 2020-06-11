import React, { Component } from 'react'
import '../styles/menu.scss'
import { NavLink } from "react-router-dom";
import Icon from './Icon';
import Dropdown from './Dropdown';
import { connect } from 'react-redux'
import { fetchRoomsforUser } from "../actions/roomsActions";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu big layout-row layout-align-end-end">
          <NavLink exact activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/">Home</NavLink>
          <Dropdown name="Rooms">
            {this.props.rooms.rooms.map(room => <NavLink key={ room.id } activeClassName="dropdown-active-item" className="dropdown-item" to={'../room/' + room.id}>{room.name}</NavLink>)}
          </Dropdown>
          <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/devices">Devices</NavLink>
        </div>

        <div className="menu small">
          <NavLink exact activeClassName="menu-item-active" className="menu-item" to="/"><Icon icon="fas fa-home" size="25" /></NavLink>
          <Dropdown displayIcon icon="fas fa-square">
            {this.props.rooms.rooms.map(room => <NavLink key={ room.id } activeClassName="dropdown-active-item" className="dropdown-item" to={'../room/' + room.id}>{room.name}</NavLink>)}
          </Dropdown>
          <NavLink className="menu-item" activeClassName="menu-item-active" to="/devices"><Icon icon="fas fa-toolbox" size="25" /></NavLink>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  rooms: state.rooms
})

export default connect(mapStateToProps, { fetchRoomsforUser })(Menu);