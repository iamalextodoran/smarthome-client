import React, { Component } from 'react'
import Icon from './Icon';
import '../styles/button.scss'
import '../styles/dropdown.scss'

export default class Button extends Component {
  render() {
    return (
      <div className="dropdown">
        {this.props.displayIcon ? <Icon icon={this.props.icon} size="25" /> : <button className={"m_button_not_raised" || this.props.type}>{this.props.name}</button>}
        <div className="dropdown-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}