import React, { Component } from 'react'
import '../styles/button.scss'
import Icon from './Icon'
import Toggle from './Toggle'

export default class Blinds extends Component {

	render() {
		return (
			<div className="card">
				<h1>Windows</h1>
				<div className="">
					{this.props.rooms.map(room => (
						<div key={room.id}>
							<p><strong>{room.name}</strong></p>
							{room.Devices.filter(device => device.type === "Blind").length > 0 ? room.Devices.filter(device => device.type === "Blind").map(window => (
								<div key={ window.id } className="layout-row layout-align-space-between-center">
									<p>{window.name}: {window.value === 0 ? "closed" : "open"}</p>
									<Toggle onChange={this.handleWindow} checked={window.value === 0 ? false : true} />
								</div>
							)) : <p>No windows found in this room</p>}
						</div>
					)
					)}
				</div>
				<div className="interactions">
					<button className="m_button accent">
						<Icon icon="fas fa-times" />
						Close all windows
		  		</button>
				</div>
			</div>
		)
	}
}
