/** @format */
import React from "react";
import "./Navbar.css";
import Beardman from "./assets/Beard Man.png";
import arrow from "./assets/arrowimg.png";
import userid from "./assets/user-account.png";
import speedicon from "./assets/icon-speed.png";
import switchicon from "./assets/switch.png";
import cap from "./assets/graduation-cap.png";
import inboxicon from "./assets/inbox.png";
import curve from './assets/Details/curveimg.png';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">Dei</div>
        <ul>
          <li>
            <img src={cap} alt="" />
            <p>Learning plan</p>
          </li>
          <img className="curve" src={curve} alt="" />
          <li>
            <img src={userid} alt="" />
          </li>
          <li>
            <img src={speedicon} alt="" />
          </li>
          <li>
            <img src={inboxicon} alt="" />
          </li>
          <li>
            <img src={switchicon} alt="" />
          </li>
        </ul>

        <div className="account">
          <div className="ac_pic">
            <img src={Beardman} alt="" />
          </div>
          <div className="acc_data">
            <h5>Baluprasad</h5>
            <p>balu1707@gmail.com</p>
          </div>
          <div className="arrow-img">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
