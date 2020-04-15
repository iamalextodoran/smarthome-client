import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Moment from 'react-moment';
import 'moment-timezone';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      country: '',
      icon: '',
      main: ''
    };
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Baia Mare&units=metric&appid=339f5ad1d5cab08963ebfc85eb910ab7')
      .then(response => response.json())
      .then(data => this.setState({weather: data.main, icon: data.weather[0], country: data.sys, main: data}));

    // fetch('https://api.weatherbit.io/v2.0/current?city=London&key=d50c57c063ec458dab88e7a1c530219c')
    //   .then(response => response.json())
    //   .then(data => this.setState({weather: data}));
  }

  render() {
    return (
      <div className="mini-card">
        {/* <h4>Weather</h4> */}
        {/* <p>@{this.state.main.name}</p> */}

        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",  marginTop: "0px"}}>

          <div style={{display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", marginLeft: "-20px"}}>
            <img src={"http://openweathermap.org/img/wn/" + this.state.icon.icon + "@2x.png"} alt={this.state.icon.description}/>
            <p>{this.state.icon.main}</p>
          </div>
          <h4><strong>{this.state.weather.temp} °C</strong></h4>

        </div>

        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "-35px"}}>
          <p><Moment format="MMM Do YYYY, h:mm a"></Moment></p>          
          <p>Feels like {this.state.weather.feels_like} °C</p>
        </div>
      </div>
    )
  }
}
