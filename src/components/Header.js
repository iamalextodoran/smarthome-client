import React, { Component } from 'react'
import Icon from './Icon'

export default class Header extends Component {
  render() {
    return (
      <div style={{marginRight: "10px"}}>
        <Icon icon="fas fa-sign-out-alt" size="23"/>
        <Icon icon="fas fa-cog" size="23"/>
      </div>
    )
  }
}
