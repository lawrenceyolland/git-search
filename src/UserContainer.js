import React, { Component } from "react";
import User from "./User";

class UserContainer extends Component {
  render() {
    const users = this.props.users.map(user => (
      <User user={user} key={user.id} />
    ));
    return (
      <div className="ul-container" >
        <ul>{users}</ul>
      </div>
    );
  }
}

export default UserContainer;
