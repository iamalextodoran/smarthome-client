import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Icon from './Icon'
import Button from './Button'
import Radio from './Radio'

export default class Temperature extends Component {
  render() {
    return (
      <div className="mini-card">
        {/* <h4>Temperature</h4> */}
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  marginTop: "0px"}}>
          {/* <Icon icon="fas fa-thermometer-empty" size="40" color="deepskyblue"/> */}
          <div></div>
          <div>
            <h4><strong>27 °C</strong></h4>
            <p style={{marginTop: "-20px"}}>Set: 22 °C</p>
          </div>
          <div>
            
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  marginTop: "-15px"}}>
          {/* <Button text="DAY"/>
          <Button text="ECO"/>
          <Button text="NIGHT" type="primary"/> */}
          <Radio name="DAY" text="DAY"/>
          <Radio name="ECO" text="ECO"/>
          <Radio name="NIGHT" text="NIGHT"/>
        </div>
      </div>
    )
  }
}
