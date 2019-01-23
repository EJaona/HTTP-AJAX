import React, { Component } from "react";
import Friends from "./Components/Friends";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.state.friends.map(friend => {
          return <Friends friend={friend} />;
        })}
      </div>
    );
  }
}

export default App;
