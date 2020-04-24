import React, { Component } from 'react'
import Header from './Header';
import User from './User';
import Menu from './Menu';

export default class Top extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="layout-row layout-align-space-between-center">
          <User name="Alex" picture="https://source.unsplash.com/800x800/?man,face" />
          <Menu />
        </div>
      </React.Fragment>
    )
  }
}
