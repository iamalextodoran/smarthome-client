import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Moment from 'react-moment';
import 'moment-timezone';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      bit: ''
    };
  }

  componentDidMount() {

    fetch('https://api.weatherbit.io/v2.0/current?city=Baia-Mare&key=d50c57c063ec458dab88e7a1c530219c')
      .then(response => response.json())
      .then(data => this.setState({bit: data.data[0], weather: data.data[0].weather}));
  
  }

  render() {
    return (
      <div className="mini-card">

        <div className="layout-column layout-align-center-center">
          <h4>{this.state.bit.city_name}</h4>
          <p style={{marginTop: "-25px"}}>{this.state.bit.country_code}</p>
        </div>

        <div className="layout-row layout-align-space-between-center" style={{marginTop: "-50px"}}>
          <div  style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <img src={"https://www.weatherbit.io/static/img/icons/" + this.state.weather.icon + ".png"} alt={this.state.weather.description} width="80px" />
            <p style={{marginTop: "-25px"}}>{this.state.weather.description}</p>
          </div>
          <div></div>
          <div  className="layout-column layout-align-end-end">
            <h4 style={{justifyContent: "end"}}><strong>{this.state.bit.temp} °C</strong></h4>
            <p style={{marginTop: "-25px"}}>Feels like {this.state.bit.app_temp} °C</p>
          </div>
        </div>

      </div>
    )
  }
}
