import React, { Component } from 'react'
import Button from './Button'
import '../styles/card.scss'

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
          <img src={this.props.img} style={{borderRadius: "20px"}} width="50%" height="50%"/>
        </div>
        <div className="interactions">
          <Button raised="true" size="medium" icon={this.props.icon} type={this.props.buttonType} text={this.props.buttonText}/>
        </div>
      </div>
    )
  }
}