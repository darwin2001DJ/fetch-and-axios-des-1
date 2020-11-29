import "./App.css";
import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>User Details</h1>
        <input id="search-box" placeholder="Search by name..." />
        <table id="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>Pincode</th>
            </tr>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.zipcode}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    );
  }
}
