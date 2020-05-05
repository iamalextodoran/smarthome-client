import React, { Component } from 'react'
import Icon from './Icon'
import { NavLink } from 'react-router-dom'
import '../styles/menu.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="menu layout-row layout-align-end-end">
        <NavLink className="menu-item" activeClassName="menu-item-active" to="/login"><Icon icon="fas fa-sign-out-alt" size="23" /></NavLink>
        <NavLink className="menu-item" activeClassName="menu-item-active" to="/settings"><Icon icon="fas fa-cog" size="23" /></NavLink>
      </div>
    )
  }
}