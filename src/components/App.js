import React, { Component } from "react";
import Navbar from "./Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1() {
    this.setState(prevState1 => {
      return {
        count: prevState1.count + 1
      };
    });
  }

  handleClick2() {
    this.setState(prevState2 => {
      return {
        count: prevState2.count + 2
      };
    });
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row d-flex justify-content-center">
          <h1>{this.state.count}</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <button onClick={this.handleClick1} className="m-1">
            Click +1
          </button>
          <button onClick={this.handleClick2} className="m-1">
            Click +2
          </button>
        </div>
      </div>
    );
  }
}

export default App;
