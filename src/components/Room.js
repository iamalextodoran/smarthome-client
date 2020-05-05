import React, { Component } from 'react'
import Left from './Left';
import Top from './Top';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { id: 1, description: "This is a room, one of a kind, unique 1", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg", name: "Big room" },
        { id: 2, description: "This is a room, one of a kind, unique 2", img: "https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg", name: "Small room" },
        { id: 4, description: "This is a room, one of a kind, unique 3", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg", name: "Living room" },
        { id: 6, description: "This is a room, one of a kind, unique 4", img: "https://www.thespruce.com/thmb/5o_dpOCoqBxM79wcGqWWA_qt50U=/5100x2869/smart/filters:no_upscale()/GettyImages-513040397-583b37d83df78c6f6ad71fe8.jpg", name: "Guest room" }
      ],
    }
  }

  render() {
    const idToMatch = parseInt(this.props.match.params.roomId)
    const room = this.state.rooms.filter(room => room.id === idToMatch)[0];

    return (
      <React.Fragment>
        <Top />
        <div className="layout-row layout-xs-column">
          <Left />
          <div className="layout-row layout-align-end-start flex-wrap flex-70">


            {<div className="card">
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

            </div>}


          </div>
        </div>
      </React.Fragment>
    )
  }
}
