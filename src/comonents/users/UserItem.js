import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/user/${login}`} className="btn btn-dark my-1">
        View Profile
      </Link>
    </div>
  );
};

export default UserItem;
