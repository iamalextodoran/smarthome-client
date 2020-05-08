import React, { Component } from 'react'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { id: 1, description: "This is a room, one of a kind, unique 1", image: "https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg", name: "Big room" },
        { id: 2, description: "This is a room, one of a kind, unique 2", image: "https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg", name: "Small room" },
        { id: 4, description: "This is a room, one of a kind, unique 3", image: "https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg", name: "Living room" },
        { id: 6, description: "This is a room, one of a kind, unique 4", image: "https://www.thespruce.com/thmb/5o_dpOCoqBxM79wcGqWWA_qt50U=/5100x2869/smart/filters:no_upscale()/GettyImages-513040397-583b37d83df78c6f6ad71fe8.jpg", name: "Guest room" }
      ],
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/rooms`)
      .then(response => response.json())
      .then(data => this.setState({rooms: data}))
  }

  render() {
    return (
      <React.Fragment>
        <div className="layout-row layout-align-end-start flex-wrap flex-70">

          <div className="layout-row layout-align-space-between-start flex-wrap">
            {this.state.rooms.map((room) => (


              <div key={room.id} className="card flex-33" style={{ minHeight: "415px" }}>
                <div className="content">
                  <h1>{room.name}</h1>
                  <p>{room.description}</p>

                  <div className="layout-row layout-align-space-between-center">
                    <div className="layout-column layout-align-none-center flex-60">
                      <img src={room.image} style={{ borderRadius: "20px" }} width="80%" />
                    </div>

                    <div className="layout-column layout-align-start-start flex-30">
                      <p style={{ marginBottom: "-15px" }}>Lights on : 3</p>
                      <p style={{ marginBottom: "-15px" }}>Temperature: 20 C</p>
                      <p style={{ marginBottom: "-15px" }}>Windws open</p>
                      <p>Blinds open</p>
                    </div>
                  </div>

                </div>
                <div className="interactions">
                  <NavLink to={`/room/${room.id}`}>
                    <Button raised="true" size="medium" type="primary" text="Get me there" />
                  </NavLink>
                </div>
              </div>


            ), [this.state.rooms])}
          </div>
        </div>
      </React.Fragment>
    )
  }
}