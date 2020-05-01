import React, { Component } from 'react'
import Slider from '../components/Slider';

export default class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [
        { id: 1, type: "Light", warm: 50, value: 50 },
        { id: 2, type: "Blind" },
        { id: 3, type: "Window" },
        { id: 4, type: "Temperature" },
      ],
    }
  }

	render() {
		return (
			<React.Fragment>
				{this.state.devices.map((device) => (


					<div key={device.id} className="card">
						<div className="content">
							<h3>{device.type}</h3>
              <p>Big room</p>
              <Slider description="Warm"/>
              <Slider description="Brightness"/>
              <p>Small room</p>
              <p>Guest room</p>
              <p>Living room</p>
						</div>
					</div>


				),[this.state.devices])}
			</React.Fragment>
		)
	}
}
