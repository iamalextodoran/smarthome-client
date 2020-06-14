import React, { Component } from 'react'
import '../styles/button.scss'
import Icon from './Icon'
import Toggle from './Toggle'
import { connect } from "react-redux";
import { editDevice } from "../actions/devicesActions";
import { fetchRoomsforUser } from "../actions/roomsActions";

class Windows extends Component {
	componentDidUpdate(prevProps) {
		if (prevProps.rooms !== this.props.rooms) {
		  // this.props.fetchRoomsforUser(1)
		}
	}

	handleWindows = (data) => {
		this.props.rooms.map(room => room.Devices.filter(device => device.type === "Window").map(window => (this.props.editDevice(window.id, data))))
	}

	handleWindow = (device) => {
		device.value > 0 ? this.props.editDevice(device.id, { value: 0} ) : this.props.editDevice(device.id, { value: 100} );
	}

	render() {
		return (
			<div className="card">
				<h1>Windows</h1>
				<div className="">
					{this.props.rooms.map(room => (
						<div key={room.id}>
							<p><strong>{room.name}</strong></p>
							{room.Devices.filter(device => device.type === "Window").length > 0 ? room.Devices.filter(device => device.type === "Window").map(window => (
								<div key={ window.id } className="layout-row layout-align-space-between-center">
									<p>{window.name}: {window.value === 0 ? "closed" : "open"}</p>
									<Toggle onChange={() => this.handleWindow(window)} checked={window.value === 0 ? false : true} />
								</div>
							)) : <p>No windows found in this room</p>}
						</div>
					)
					)}
				</div>
				<div className="interactions">
					<button className="m_button accent" onClick={ () => this.handleWindows( {value: 0} )}>
						<Icon icon="fas fa-times" />
						Close all windows
		  		</button>
				</div>
			</div>
		)
	}
}

export default connect(null, { editDevice, fetchRoomsforUser })(Windows);
