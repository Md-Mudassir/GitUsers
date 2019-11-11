import React, { useState } from "react";

const Search = ({ setAlert, searchUsers, clearUsers }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert(console.log("Enter username"));
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          placeholder="Search Users.."
          name="text"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      <button className="btn btn-light btn-block" onClick={clearUsers}>
        Clear
      </button>
    </div>
  );
};

export default Search;
