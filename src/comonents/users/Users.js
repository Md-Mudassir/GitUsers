import React, { Component } from "react";

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "mojo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: 2,
        login: "moji",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: 3,
        login: "mojo",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/mojombo"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <img
            src={user.avatar_url}
            className="round-img"
            alt=""
            style={{ width: "60px" }}
          />
        ))}
      </div>
    );
  }
}

export default Users;
