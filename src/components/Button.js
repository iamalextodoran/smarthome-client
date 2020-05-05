import React, { Component } from 'react'
import Icon from './Icon';
import '../styles/button.scss'

export default class Button extends Component {
  render() {
    return (
      <div className={(this.props.raised ? 'm_button ' : 'm_button_not_raised ') + this.props.type + ' ' + this.props.size} >
        <Icon icon={this.props.icon} />{this.props.text}
      </div>
    )
  }
}