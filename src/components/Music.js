import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Icon from './Icon'
import Slider from './Slider'

export default class Music extends Component {
  state = {
    playing: false,
    artistList: ["MGK", "G-Eazy", "Eminem", "Sandu Ciorba", "Florin Salam"],
    songList: ["Smoke and drive", "Moana", "Lose yourself", "Aragaz cu butelie", "Toate pozele cu tine"],
    songIndex: 0,
    volume: 100,
    timeElapsed: 30,
  }

  prevSong = () => {
    this.state.songIndex !== 0 && this.setState({ songIndex: (this.state.songIndex - 1) });
  }

  playSong = () => {
    this.setState({ playing: !this.state.playing })
  }

  nextSong = () => {
    this.state.songIndex !== this.state.songList.length - 1 && this.setState({ songIndex: (this.state.songIndex + 1) });
  }

  render() {
    return (
      <div className="mini-card">
        <div className="layout-column layout-align-center-center">
          <p>{this.state.artistList[this.state.songIndex]} - {this.state.songList[this.state.songIndex]}</p>
          <div className="layout-row layout-align-center-center">
            <Icon icon="fas fa-step-backward" size="40" onClick={this.prevSong} />
            <Icon icon={this.state.playing ? 'fas fa-play' : 'fas fa-pause'} size="40" onClick={this.playSong} />
            <Icon icon="fas fa-step-forward" size="40" onClick={this.nextSong} />
          </div>

        </div>
        <br></br>
        <br></br>
        <Slider value={this.state.volume} />
      </div>
    )
  }
}
