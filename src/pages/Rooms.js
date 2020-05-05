import React, { Component } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon';
import { NavLink } from 'react-router-dom';

export default class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { description: "This is a room, one of a kind, unique 1", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg", id: 1, name: "Big room" },
        { description: "This is a room, one of a kind, unique 2", img: "https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg", id: 2, name: "Small room" },
        { description: "This is a room, one of a kind, unique 3", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg", id: 3, name: "Living room" },
        { description: "This is a room, one of a kind, unique 4", img: "https://www.thespruce.com/thmb/5o_dpOCoqBxM79wcGqWWA_qt50U=/5100x2869/smart/filters:no_upscale()/GettyImages-513040397-583b37d83df78c6f6ad71fe8.jpg", id: 4, name: "Guest room" }
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="layout-row layout-align-space-between-start flex-wrap">
          {this.state.rooms.map((room) => (


            <div key={room.id} className="card">
              <div className="content">
                <h1>{room.name}</h1>
                <p>{room.description}</p>

                <img src={room.img} style={{ minWidth: "200px", width: "100%", maxWidth: "500px", borderRadius: "20px" }} />
                <div style={{ marginLeft: "20px" }}>
                  <p style={{ marginBottom: "-15px" }}>Lights on : 3</p>
                  <p style={{ marginBottom: "-15px" }}>Temperature: 20 C</p>
                  <p style={{ marginBottom: "-15px" }}>Windws open</p>
                  <p>Blinds open</p>
                </div>

              </div>
              <div className="interactions" style={{ marginTop: "-20px" }}>
                <NavLink to={`/room/${room.id}`}>
                  <Button raised="true" size="medium" type="primary" text="Get me there" />
                </NavLink>
              </div>
            </div>


          ), [this.state.rooms])}
        </div>
      </React.Fragment>
    )
  }
}
