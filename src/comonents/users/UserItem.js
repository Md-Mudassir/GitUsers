import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          className="round-img"
          alt=""
          style={{ width: "60px" }}
        />
        <h2>{login}</h2>
        <a href={html}>Click</a>
      </div>
    );
  }
}

export default UserItem;
