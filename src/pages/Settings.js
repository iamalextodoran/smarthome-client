import React, { Component } from 'react'
import '../styles/big-card.scss'
import Toggle from '../components/Toggle'

export default class Settings extends Component {
  render() {
    return (
      <div className="big-card" style={{borderSize: "border-box", paddingRight: "110px"}}>
        <h1>Settings</h1>


        <p>Appereance</p>
        <p>Dark mode</p>
        <Toggle/>
        <p>Primary color</p>
        <p>Accent color</p>

        <p>User details</p>
        <p>Picture</p>
        <p>First and last name</p>

      </div>
    )
  }
}
