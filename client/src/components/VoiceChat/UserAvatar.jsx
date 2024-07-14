import React from "react";

const UserAvatar = ({ username }) => {
  return (
    <div className="client">
      <img src="/images/goku.jpg" alt="profilePic" />
      <span className="userName">{username}</span>
    </div>
  );
};

export default UserAvatar;
