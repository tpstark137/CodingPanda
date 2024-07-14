import React from "react";
import "./Channels.css";
import Card from "../Card/Card";

const Channels = () => {
  const rooms = [
    {
      id: 1,
      topic: "Which framework best for frontend ?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 3,
      topic: "What’s new in machine learning?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 4,
      topic: "Why people use stack overflow?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 5,
      topic: "Artificial inteligence is the future?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 6,
      topic: "Artificial inteligence is the future?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },

    {
      id: 7,
      topic: "What’s new in machine learning?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 8,
      topic: "Why people use stack overflow?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 10,
      topic: "Artificial inteligence is the future?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 1,
      topic: "Which framework best for frontend ?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 3,
      topic: "What’s new in machine learning?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 4,
      topic: "Why people use stack overflow?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 5,
      topic: "Artificial inteligence is the future?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 6,
      topic: "Artificial inteligence is the future?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },

    {
      id: 7,
      topic: "What’s new in machine learning?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 8,
      topic: "Why people use stack overflow?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 10,
      topic: "Artificial inteligence is the future?",
      speakers: [
        {
          id: 1,
          name: "John Doe",
          avatar: "/images/goku.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "/images/goku.jpg",
        },
      ],
      totalPeople: 40,
    },
  ];

  return (
    <div className="channels-container">
      {rooms.map((room) => (
        <Card key={room.id} room={room} />
      ))}
    </div>
  );
};

export default Channels;
