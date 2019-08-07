import React, { Component } from "react";

class Repo extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    };
  }

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  iconClass = data => {
    if (data !== null) return `devicon-${data.toLowerCase()}-plain`;
  };
  
  render() {
    const {
      html_url,
      name,
      language,
      owner,
      forks,
      stargazers_count,
      watchers_count
    } = this.props.repo;
    return (
      <div className="repo-list-item">
        <a href={html_url}>
          <h3>{name}</h3>
        </a>
        <a href={owner.html_url}>
          {" "}
          <h5>{owner.login}</h5>
        </a>
        <i className={this.iconClass(language)}>
          {language !== null ? " " + language : "unknown"}
        </i>
        {/* <span>F-{forks} W-{watchers_count} S-{stargazers_count}</span> */}
        <button className="like-btn" onClick={this.handleClick}>
          <i class="fa fa-heart" aria-hidden="true" /> Likes:
          <span> {this.state.likes}</span>
        </button>
      </div>
    );
  }
}

export default Repo;
