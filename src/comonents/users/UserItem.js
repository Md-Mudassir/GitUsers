import React from "react";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt=""
        style={{ width: "60px" }}
      />
      <h2>{login}</h2>
      <a href={html_url} className="btn btn-dark my-1">
        View Profile
      </a>
    </div>
  );
};

export default UserItem;
