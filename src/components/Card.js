import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import '../styles/card.scss'

export default class Card extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
        <div class="interactions">
          <Button raised="true" size="medium" icon={this.props.icon} type={this.props.buttonType} text={this.props.buttonText}/>
        </div>
      </div>
    )
  }
}