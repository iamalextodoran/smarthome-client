import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Icon from './Icon'
import Toggle from './Toggle'

export default class Light extends Component {
  state = {
    isAnyLightOn: true,
    lightsOn: 21,
    totalLights: 30,
  }

  getLightsToggle = (toggleState) => {
    this.setState({ isAnyLightOn: !toggleState });
    if (toggleState) {
      this.setState({lightsOn: 0})
    } else {
      this.setState({lightsOn: this.state.totalLights})
    }
  }

  render() {
    return (
      <div className="mini-card">
        <div className="layout-row layout-align-space-between-center">
          <Icon icon="fas fa-lightbulb" size="40" color={this.state.lightsOn === 0? "grey": "gold" }/>
          <div className="layout-column layout-align-end-end">
            <h4 style={{paddingLeft: "5px"}}>Lights</h4>
            <p style={{ marginLeft: "0px", marginTop: "-25px" }}>{this.state.lightsOn} out of {this.state.totalLights}</p>
          </div>
          <Toggle id="1" name="lights" getLightsToggle={this.getLightsToggle} checked={this.state.isAnyLightOn? true: false}/>
        </div>
      </div>
    )
  }
}