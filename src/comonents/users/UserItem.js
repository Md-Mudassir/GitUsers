import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: 1,
    login: "mojo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  };
  render() {
    const { login, avatar_url, html } = this.state;
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
