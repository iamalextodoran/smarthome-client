import React, { Component } from 'react'
import Slider from './Slider'
import '../styles/button.scss'
import Icon from './Icon'
import Toggle from './Toggle'
export default class Blinds extends Component {
	state = {
		rooms: [
			{
				id: 1,
				name: "Johns room",
				description: "My bedroom",
				image: "https://source.unsplash.com/JIUjvqe2ZHg",
				createdAt: "2020-05-11T16:51:56.974Z",
				updatedAt: "2020-05-11T16:51:56.974Z",
				UserId: 1,
				Devices: [
					{
						id: 1,
						name: "Main light",
						type: "Light",
						description: "",
						value: 100,
						warm: 30,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 1
					},
					{
						id: 4,
						name: "Temperature",
						type: "Temperature",
						description: "",
						value: 23,
						warm: 20,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 1
					},
					{
						id: 2,
						name: "Blinds",
						type: "Blind",
						description: "",
						value: 50,
						warm: 0,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 1
					},
					{
						id: 3,
						name: "Windows",
						type: "Window",
						description: "",
						value: 50,
						warm: 0,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 1
					}
				]
			},
			{
				id: 2,
				name: "Living room",
				description: "My living room",
				image: "https://source.unsplash.com/17NCG_wOkMY",
				createdAt: "2020-05-11T16:51:56.974Z",
				updatedAt: "2020-05-11T16:51:56.974Z",
				UserId: 1,
				Devices: [
					{
						id: 5,
						name: "Main light",
						type: "Light",
						description: "",
						value: 100,
						warm: 30,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 2
					},
					{
						id: 6,
						name: "Blinds",
						type: "Blind",
						description: "",
						value: 20,
						warm: 0,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 2
					},
					{
						id: 8,
						name: "Temperature",
						type: "Temperature",
						description: "",
						value: 31,
						warm: 20,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 2
					},
					{
						id: 7,
						name: "Windows",
						type: "Window",
						description: "",
						value: 30,
						warm: 0,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 2
					}
				]
			},
			{
				id: 3,
				name: "Guest room",
				description: "My guest room",
				image: "https://source.unsplash.com/gREquCUXQLI",
				createdAt: "2020-05-11T16:51:56.974Z",
				updatedAt: "2020-05-11T16:51:56.974Z",
				UserId: 1,
				Devices: [
					{
						id: 9,
						name: "Main light",
						type: "Light",
						description: "",
						value: 100,
						warm: 30,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 3
					},
					{
						id: 12,
						name: "Temperature",
						type: "Temperature",
						description: "",
						value: 13,
						warm: 20,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 3
					},
					{
						id: 10,
						name: "Blinds",
						type: "Blind",
						description: "",
						value: 0,
						warm: 0,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 3
					},
					{
						id: 11,
						name: "Windows",
						type: "Window",
						description: "",
						value: 0,
						warm: 0,
						createdAt: "2020-05-11T16:51:56.982Z",
						updatedAt: "2020-05-11T16:51:56.982Z",
						RoomId: 3
					}
				]
			}
		],
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
					{this.state.rooms.map(room => (
						<div>
							<p><strong>{room.name}</strong></p>
							{room.Devices.filter(device => device.type === "Blind").map(blind => (
								<div className="layout-row layout-align-space-between-center">
									<p>{blind.name}: {blind.value === 0 ? "closed" : "open"}</p>
									<Toggle onChange={this.handleBlind} checked={blind.value === 0 ? false : true} />
								</div>
							))}
						</div>
					)
					)}
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
