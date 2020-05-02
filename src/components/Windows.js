import React, { Component } from 'react'
import Slider from './Slider'
import '../styles/button.scss'
import Icon from './Icon'

export default class Blinds extends Component {
	state = {
		windows: [
			{ id: 2, name: "Windows", roomId: 1, value: 0, warm: null },
			{ id: 15, name: "Windows", roomId: 2, value: 0, warm: null },
			{ id: 23, name: "Windows", roomId: 3, value: 100, warm: null },
		]
	}

	render() {
		return (
			<div className="card">
				<div className="content">
					<h3>Windows</h3>
          <button className="m_button accent">
            <Icon icon="fas fa-times"/>
            Close all windows
          </button>
					<div className="">
						{this.state.windows.map((window) => (
							<div key={window.id}>
								<p style={{ color: "coral" }}>In room {window.roomId}</p>
								{window.value === 0 ? <p>Windows closed</p> : <p>Windows open</p>}
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}
