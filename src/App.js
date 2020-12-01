import "./App.css";
import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      search: "",
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }

  searchHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    const { users, search } = this.state;
    let searchedData = users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div>
        <h1>User Details</h1>
        <input
          id="search-box"
          placeholder="Search by name..."
          name="search"
          value={search}
          onChange={this.searchHandler}
        />
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
            {searchedData.map((user) => {
              return (
                <tr key={user.id}>
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
