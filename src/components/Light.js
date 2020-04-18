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
          <div>
            <h4>Lights</h4>
            <p style={{marginLeft: "0px", marginTop: "-25px"}}>21 out of 30</p>
          </div>
          <Toggle />
        </div>
      </div>
    )
  }
}