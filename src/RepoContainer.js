import React, { Component } from "react";
import Repo from "./Repo";

class RepoContainer extends Component {
  render() {
    const repos = this.props.repos.map(repo => (
      <Repo repo={repo} key={repo.id} />
    ));
    return (
      <div className="repo-list">
        <ul>{repos}</ul>
      </div>
    );
  }
}

export default RepoContainer;
