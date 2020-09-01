import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      this.setState({ time });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h3>The time is: {this.state.time}</h3>
      </div>
    );
  }
}

export default Timer;
