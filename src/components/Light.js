import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Button from './Button'
import Icon from './Icon'
import Toggle from './Toggle'

export default class Light extends Component {
  render() {
    return (
      <div className="mini-card">
        {/* <h4>Lights</h4>         */}
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Icon icon="fas fa-lightbulb" size="40" color="gold"/>
          <p style={{marginLeft: "10px", marginTop: "20px"}}>21/30 lights on</p>
          <Toggle />
        </div>
      </div>
    )
  }
}