import React, { Component } from 'react'

export default class NoMatch extends Component {
  render() {
    return (
      <div style={{height: "80vh"}}className="layout-column layout-align-center-center">
        <h1>Page not found brotha!</h1>
        <p style={{color: "var(--primary-color)", marginTop: "-20px"}}><strong>404</strong></p>
        <img src="https://lh3.googleusercontent.com/proxy/BdJCR08JvJ3yuUO6ZE4yu4m5b5lPWlJm9Pq8Qw292LtyL7szTbkYkLTcxWCS5bSCUS4JkIaU22Vks-EY6NQIT0GclxFvAuNaCTBdmt44aiWVzoBvDbzxbNFUHLu-" width="300px"/>
      </div>
    )
  }
}
