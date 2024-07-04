/** @format */

import React from "react";
import "./Dashboard.css";
import cap from './assets/graduation-cap-color.png';
import search from './assets/icon-search.png';
import Leaderboard from "./Leaderboard";
import Positions from "./Positions";

const Dahboard = () => {
  return (
    <section className="body">
      <div className="main">
        <div className="header">
          <div className="header-text">
            <p>
              My Peers
              <img src={cap} alt="" />
            </p>
          </div>
          <div className="search">
            <img src={search} alt="" />
            <input type="text" placeholder="search"/>
          </div>
        </div>
        <Positions />
      </div>
      <Leaderboard />
    </section>
  );
};

export default Dahboard;
