import React from "react";
import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="rooms-container">
      <hr style={{ fontWeight: "lighter" }} />
      <div className="header">
        <div className="left">
          <span className="heading">All coding channels</span>
          <div className="searchBox">
            <img src="/images/search-icon.png" alt="search" />
            <input type="text" className="searchInput" />
          </div>
        </div>
        <div className="right">
          <button className="startRoomButton">
            <img src="/images/add-room-icon.png" alt="add-room" />
            <span>Start a channel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
