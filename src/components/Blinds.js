import React, { Component } from 'react'
import Slider from './Slider'
import '../styles/button.scss'
import Icon from './Icon'
export default class Blinds extends Component {
	state = {
		blinds: [
			{ id: 3, name: "Blinds", roomId: 1, value: 0, warm: 30 },
			{ id: 16, name: "Blinds", roomId: 2, value: 0, warm: 10 },
			{ id: 26, name: "Blinds", roomId: 3, value: 100, warm: 60 },
		]
	}

	// componentDidMount() {
	// 	fetch(`/devices/blinds`)
	// 		.then(response => response.json())
	// 		.then(data => this.setState({ blinds: data }))
	// }

	render() {
		return (
			<div className="card">
				<h1>Blinds</h1>
				<div className="">
					{this.state.blinds.map((blind) => (
						<div key={blind.id}>
							<p style={{ color: "var(--primary-color)" }}>In room {blind.roomId}</p>
							{blind.value === 0 ? <p>Blinds closed</p> : <p>Blinds open</p>}
						</div>
					))}
				</div>
				<div className="interactions">
					<button className="m_button accent">
						<Icon icon="fas fa-times" />
            Close all blinds
          </button>
				</div>
			</div>
		)
	}
}
