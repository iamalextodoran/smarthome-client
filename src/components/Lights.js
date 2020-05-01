import React, { Component } from 'react'
import Slider from './Slider'
import Icon from './Icon'

export default class Lights extends Component {
	state = {
		lights: [
			{ id: 3, name: "Light 1", roomId: "Big Room", value: 75, warm: 30 },
			{ id: 4, name: "Light 2", roomId: "Big Room", value: 75, warm: 30 },
			{ id: 5, name: "Light 3", roomId: "Big Room", value: 75, warm: 30 },
			{ id: 6, name: "Light 4", roomId: "Big Room", value: 75, warm: 30 },
			{ id: 16, name: "Light 1", roomId: "Small Room", value: 30, warm: 10 },
			{ id: 26, name: "Light 2", roomId: "Small Room", value: 30, warm: 20 },
			{ id: 56, name: "Light 3", roomId: "Small Room", value: 30, warm: 60 },
			{ id: 26, name: "Light 1", roomId: "Guest Room", value: 30, warm: 60 },
		]
	}
	handleLights = () => {
		this.state.lights.map((light) => console.log(light.value))
	}

	render() {
		return (
			<div className="card">
				<div className="content">
					<div>
						<h3>Lights</h3>
						<button className="m_button accent" onClick={this.handleLights}><Icon icon="fas fa-power-off"/>All lights warm</button>
					</div>
					<div className="layout-row layout-align-space-between-start flex-wrap">
						{this.state.lights.map((light) => (
							<div style={{ flex: "50%" }}>
								<p key={light.id}>{light.name}</p>
								<Slider description="brightness" value={light.value} color="orange" />
								<Slider description="warmth" value={light.warm} color="hotpink" />
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}
