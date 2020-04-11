import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/button.scss'

export default class Button extends Component {
  static propTypes = {
    prop: PropTypes
  };

  // var buttonClasses = () => {
  //   if(this.props.raised || this.props.raised === 'undefined') {
  //     return 'm_button ';
  //   } else {
  //     return 'm_button_not_raised ';
  //   }
  // }
  
  render() {
    return (
      <div className={(this.props.raised ? 'm_button ': 'm_button_not_raised ') + this.props.type + ' ' + this.props.size} >
        <i className={this.props.icon}></i>{this.props.text}
      </div>
    )
  }
}