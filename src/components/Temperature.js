import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Icon from './Icon'
import Button from './Button'
import Radio from './Radio'

export default class Temperature extends Component {
  render() {
    return (
      <div className="mini-card">
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",  marginTop: "0px"}}>
            {/* <Icon icon="fas fa-thermometer-empty" size="50" color="deepskyblue"/> */}
            <div>
              <h4><strong>27 °C</strong></h4>
              <p style={{marginTop: "-25px"}}>set 22 °C</p>
            </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  marginTop: "-15px"}}>
          <Radio name="DAY" text="DAY"/>
          <Radio name="ECO" text="ECO"/>
          <Radio name="NIGHT" text="NIGHT"/>
        </div>
      </div>
    )
  }
}
