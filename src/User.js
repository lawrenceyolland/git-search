import React, { Component } from "react";

class User extends Component {
  render() {
    const { html_url, login, avatar_url } = this.props.user;
    return (
      <div className="user-list-item">
        <a href={html_url} className="user">
          {login}
        </a>
        <a href={html_url}>
          <img alt="user" className="user-avatar" src={avatar_url} />
        </a>
      </div>
    );
  }
}

export default User;
