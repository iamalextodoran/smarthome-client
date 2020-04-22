import React, { Component } from 'react'
import Icon from './Icon'
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div style={{marginRight: "10px"}}>
        <NavLink style={{color: "black"}} activeStyle={{color: "coral"}} to="/login"><Icon icon="fas fa-sign-out-alt" size="23"/></NavLink>
        <NavLink style={{color: "black"}} activeStyle={{color: "coral"}} to="/settings"><Icon icon="fas fa-cog" size="23"/></NavLink>
      </div>
    )
  }
}