import React, { Component } from 'react'
import '../styles/card.scss'
import Moment from 'react-moment';
import 'moment-timezone';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      bit: '',
      city: 'Baia-Mare',
    };

    // fetch(`/users/1`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ city: data.city }))
  }

  componentDidMount() {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${this.state.city}&key=d50c57c063ec458dab88e7a1c530219c`)
      .then(response => response.json())
      .then(data => this.setState({ bit: data.data[0], weather: data.data[0].weather }));
  }

  render() {
    return (
      <div className="card">
        <div className="layout-column layout-align-center-center">
          <h2>{this.state.bit.city_name}</h2>
          <p style={{ marginTop: "-25px" }}>{this.state.bit.country_code}</p>
        </div>
        <div className="layout-row layout-align-space-between-center" style={{ marginTop: "-70px" }}>
          <div className="layout-column layout-align-center-center">
            <img src={"https://www.weatherbit.io/static/img/icons/" + this.state.weather.icon + ".png"} alt={this.state.weather.description} width="80px" />
            <p style={{ marginTop: "-25px" }}>{this.state.weather.description}</p>
          </div>
          <div></div>
          <div className="layout-column layout-align-end-end">
            <h2 style={{ justifyContent: "end" }}><strong>{this.state.bit.temp} °C</strong></h2>
            <p style={{ marginTop: "-25px" }}>Feels like {this.state.bit.app_temp} °C</p>
          </div>
        </div>
      </div>
    )
  }
}
