import React, { Component } from 'react'
import Slider from './Slider'
export default class Blinds extends Component {
	state = {
		blinds: [
			{ id: 3, name: "Blinds", roomId: 1, value: 0, warm: 30 },
			{ id: 16, name: "Blinds", roomId: 2, value: 0, warm: 10 },
			{ id: 26, name: "Blinds", roomId: 3, value: 100, warm: 60 },
		]
	}

	render() {
		return (
			<div className="card">
				<div className="content">
					<h3>Blinds</h3>
					<div className="">
						{this.state.blinds.map((blind) => (
							<div key={blind.id}>
								<p style={{ color: "coral" }}>{blind.roomId}</p>
								{blind.value === 0 ? <p>Blinds closed</p> : <p>Blinds open</p>}
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}
