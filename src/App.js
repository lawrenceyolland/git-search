import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import UserContainer from "./UserContainer";
import RepoContainer from "./RepoContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      data: []
    };
  }

  submit = ({ query, endPoint }) => {
    let fetchURL = "https://api.github.com/search/";
    let cb = {
      users: this.processUserData,
      repositories: this.processRepoData
    };
    return fetch(fetchURL + endPoint + "?q=" + query)
      .then(data => data.json())
      .then(cb[endPoint]);
  };

  processUserData = u => {
    this.setState({
      type: "users",
      data: u.items
    });
  };

  processRepoData = r => {
    this.setState({
      type: "repositories",
      data: r.items
    });
  };

  render() {
    const { type, data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>GitHub Search</h1>
            <Search submit={this.submit} />
          </div>
        </header>
        {type === "users" ? (
          <UserContainer users={data} />
        ) : (
          <RepoContainer repos={data} />
        )}
      </div>
    );
  }
}

export default App;
