import React from "react";
import "./VoiceChat.css";
import UserAvatar from "./UserAvatar";

const VoiceChat = () => {
  const dummy = [
    {
      id: 1,
      username: "User1",
    },
    {
      id: 2,
      username: "User2",
    },
    {
      id: 3,
      username: "User3",
    },
    {
      id: 4,
      username: "User1",
    },
    {
      id: 5,
      username: "User2",
    },
    {
      id: 6,
      username: "User3",
    },
  ];
  return (
    <div className="voice-root">
      <div className="header-voice">
        <h4>Speakers</h4>
      </div>
      <div className="voice-area">
        {dummy.map((ele) => (
          <UserAvatar username={ele.username} />
        ))}
      </div>
    </div>
  );
};

export default VoiceChat;
