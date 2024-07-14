import React from "react";
import ParticlesComponent from "../../components/Shared/Particles.config";
import Navigation from "../../components/Navigation/Navigation";
import "./Home.css";
import Rooms from "../../components/Rooms/Rooms";
import Channels from "../../components/Channels/Channels";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="search-header">
          <Navigation />
          <Rooms />
        </div>
        <div className="home-channels">
          <Channels />
        </div>
      </div>
    </div>
  );
};

export default Home;
