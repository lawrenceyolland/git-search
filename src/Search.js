import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      endPoint: "users" // set as default for select
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (!query || !query.trim()) {
      console.log("empty string");
    } else {
      this.props.submit(this.state);
    }
  };

  updateQuery = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleChange = e => {
    this.setState({
      endPoint: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option value="users">Users</option>
            <option value="repositories">Repositories</option>
          </select>
          <input type="text" onChange={this.updateQuery} />
          <button type="Submit">search</button>
        </form>
      </div>
    );
  }
}

export default Search;

