/** @format */

import React from "react";
import "./Leaderboard.css";
import icon from "./assets/icon-trophy.png";
import profile from "./assets/profile.png";
import waiter from "./assets/Waiter.png";
import businessman from "./assets/Businessman.png";
import styleboy from "./assets/Stylist-Boy.png";
import girl_yellow from "./assets/Stylist-Girl-yellow.png";
import girl_darkblue from "./assets/Stylist-Girl-darkblue.png";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="leader-head">
        <p>Leaderboard</p>
        <img src={icon} alt="" />
      </div>
      <div className="leader-profile">
        <img src={profile} alt="" />
        <p>Balu prasad</p>
        <button>100% completed</button>
      </div>

      <div
        className="leadercard-list"
        style={{ background: "white", boxShadow: "5px 5px 20px grey" }}
      >
        <div>
          <img src={waiter} alt="" />
        </div>
        <div className="leadercard-datails">
          <h5>Michael Kapfler</h5>
          <p>75% completed</p>
        </div>
        <div className="number">
          <h2>2</h2>
        </div>
      </div>

      <div className="leadercard-list">
        <div>
          <img src={businessman} alt="" />
        </div>
        <div className="leadercard-datails">
          <h5>Alice Koller</h5>
          <p>73% completed</p>
        </div>
        <div className="number">
          <h2 style={{ background: "#9999FF" }}>3</h2>
        </div>
      </div>

      <div className="leadercard-list">
        <div>
          <img src={styleboy} alt="" />
        </div>
        <div className="leadercard-datails">
          <h5>Peter Dinklage</h5>
          <p>69% completed</p>
        </div>
        <div className="number">
          <h2 style={{ background: "#FFF176" }}>4</h2>
        </div>
      </div>

      <div className="leadercard-list">
        <div>
          <img src={girl_yellow} alt="" />
        </div>
        <div className="leadercard-datails">
          <h5>Julia Limbof</h5>
          <p>68% completed</p>
        </div>
        <div className="number">
          <h2 style={{ background: "#b3d9ff" }}>5</h2>
        </div>
      </div>

      <div className="leadercard-list">
        <div>
          <img src={girl_darkblue} alt="" />
        </div>
        <div className="leadercard-datails">
          <h5>Dave Jhanson</h5>
          <p>58% completed</p>
        </div>
        <div className="number">
          <h2 style={{ background: " #ff99e6" }}>6</h2>
        </div>
      </div>

      <div className="leadercard-list">
        <div>
          <img src={waiter} alt="" />
        </div>
        <div className="leadercard-datails">
          <h5>John Wick</h5>
          <p>72% completed</p>
        </div>
        <div className="number">
          <h2 style={{ background: "#b3d1ff" }}>7</h2>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
