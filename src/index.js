import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Home extends React.Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false,
  };

  handleAction = (name) => {
    this.setState({
      [name]: !this.state[name],// invert boolean
    });
  };

  render() {
    return (
      <div className="home">
        <div className="header-home">HOME</div>
        <div className="room-container">
          <Room
            name="kitchen"
            homeState={this.state}
            onAction={this.handleAction}
          />
          <Room
            name="bathroom"
            homeState={this.state}
            onAction={this.handleAction}
          />
          <Room
            name="livingRoom"
            homeState={this.state}
            onAction={this.handleAction}
          />
          <Room
            name="bedroom"
            homeState={this.state}
            onAction={this.handleAction}
          />
        </div>
      </div>
    );
  }
}

function Room({ name, homeState, onAction }) {
  return (
    <div className="room">
      <div className="room-name">{name}</div>
      <div className="room-ligth">
        {homeState[name] ? "TURN ON" : "TURN OFF"}
      </div>
      <button className="room-switch" onClick={() => onAction(name)}>
        LIGTH
      </button>
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#root"));
