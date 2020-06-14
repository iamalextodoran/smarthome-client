import React, { Component } from 'react'
import '../styles/button.scss'
import Icon from './Icon'
import Toggle from './Toggle'
import { connect } from "react-redux";
import { editDevice } from "../actions/devicesActions";
import { fetchRoomsforUser } from "../actions/roomsActions";

class Blinds extends Component {
	componentDidUpdate(prevProps) {
		if (prevProps.rooms !== this.props.rooms) {
		//   this.props.fetchRoomsforUser(1)
		}
	}

	handleBlinds = (data) => {
    this.props.rooms.map(room => room.Devices.filter(device => device.type === "Blind").map(blind => (this.props.editDevice(blind.id, data))))
	}

	handleBlind = (device) => {
		device.value > 0 ? this.props.editDevice(device.id, { value: 0} ) : this.props.editDevice(device.id, { value: 100} );
	}

	render() {
		return (	
			<div className="card">
				<h1>Blinds</h1>
				<div className="">
					{this.props.rooms.map(room => (
						<div key={ room.id }>
							<p><strong>{room.name}</strong></p>
							{room.Devices.filter(device => device.type === "Blind").length > 0 ? room.Devices.filter(device => device.type === "Blind").map(blind => (
								<div key={ blind.id } className="layout-row layout-align-space-between-center">
									<p>{blind.name}: {blind.value === 0 ? "closed" : "open"}</p>
									<Toggle onChange={() => this.handleBlind(blind)} checked={blind.value === 0 ? false : true} />
								</div>
							)) : <p>No blinds found in this room</p>}
						</div>
					)
					)}
				</div>
				<div className="interactions">
					<button className="m_button accent" onClick={ () => this.handleBlinds({ value: 0 }) }>
						<Icon icon="fas fa-times" />
            Close all blinds
          </button>
				</div>
			</div>
		)
	}
}


export default connect(null, { editDevice, fetchRoomsforUser })(Blinds);
