import React, { Component } from "react";
import Friends from "./Components/Friends";
import Form from "./Components/Form";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    friends: [],
    newFriend: {
      name: "",
      age: null,
      email: ""
    }
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = _ => {
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));

    this.setState({
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  deleteFriend = id => {
    this.state.friends.find(friend => {
      if (friend.name === id) {
        console.log(friend, id);
        axios
          .delete(`http://localhost:5000/friends/${friend.id}`)
          .then(res => this.setState({ friends: res.data }))
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.state.friends.map(friend => {
          return <Friends friend={friend} deleteFriend={this.deleteFriend} />;
        })}
        <Form
          handleChange={this.handleChange}
          newFriend={this.state.newFriend}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default App;
