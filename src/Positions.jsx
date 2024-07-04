import React from 'react';
import './Positions.css';
import clock from './assets/icon-clock.png';
import img1 from './assets/Details/image1.png';
import waiter from "./assets/Waiter.png";
import businessman from "./assets/Businessman.png";
import girl_yellow from "./assets/Stylist-Girl-yellow.png";
import girl_darkblue from "./assets/Stylist-Girl-darkblue.png";
import girl_blue from "./assets/Stylist-Girl-blue.png";
import yellowboy from './assets/Boy.png';
import violet from './assets/Details/5thimage.png';

const Positions = () => {
    return (
      <div className="character">
        <div className="table">
          <div className="date">
            <p1>19</p1>
            <p>Mar</p>
          </div>
          <img src={waiter} alt="" />
          <div className="profile">
            <h1>Michael Kopflier</h1>
            <p>Project Manager</p>
          </div>
          <div className="char_below">
            <div className="bg-color">
              <div className="timer">
                <h3>Meet the patient</h3>
                <img src={clock} alt="" />
                <p>45 min</p>
                <div className="sound">
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="sound">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="date">
            <p1>21</p1>
            <p>Mar</p>
          </div>
          <img src={girl_yellow} alt="" />
          <div className="profile">
            <h1>Alice Koller</h1>
            <p>Programmer</p>
          </div>
          <div className="char_below">
            <div className="bg-color1">
              <div className="timer">
                <h3>Topographic Anotomy</h3>
                <img src={clock} alt="" />
                <p>16 min</p>
                <div className="sound">
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="sound">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="date">
            <p1>22</p1>
            <p>Mar</p>
          </div>
          <img src={businessman} alt="" />
          <div className="profile">
            <h1>Peter Dinklage</h1>
            <p>CEO</p>
          </div>
          <div className="char_below">
            <div className="bg-color2">
              <div className="timer2">
                <h3>Preparation,Saving</h3>
                <img src={clock} alt="" />
                <p>28 min</p>
              </div>
              <div className="sound">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="table1">
          <div className="table_tilt">
            <div className="date">
              <p1>26</p1>
              <p>Mar</p>
            </div>
            <img src={girl_blue} alt="" />
            <div className="profile">
              <h1>Julia Berger</h1>
              <p>CEO</p>
            </div>
            <div className="char_below">
              <div className="bg-color3">
                <div className="timer">
                  <h3>Diagnosing a patient</h3>
                  <img src={clock} alt="" />
                  <p>45 min</p>
                </div>
                <div className="sound">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table5">
          <div className="fifth_profile">
            <img src={violet} alt="" />
            <div className="fifth_heading">
              <h1>Circulatory &nbsp;&nbsp;&nbsp;System</h1>
              <div className="headingpart">
                <img src={clock} alt="" />
                <input placeholder="Keep Watching 00:30" />
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="date">
            <p1>19</p1>
            <p>Mar</p>
          </div>
          <img src={yellowboy} alt="" />
          <div className="profile">
            <h1>John Wick</h1>
            <p>Web Designer</p>
          </div>
          <div className="char_below">
            <div className="bg-color4">
              <div className="timer">
                <h3>Meet the patient</h3>
                <img src={clock} alt="" />
                <p>56 min</p>
                <div className="sound">
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="sound">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="date">
            <p1>27</p1>
            <p>Mar</p>
          </div>
          <img src={girl_yellow} alt="" />
          <div className="profile">
            <h1>Balu prasad</h1>
            <p>Project Manager</p>
          </div>
          <div className="char_below">
            <div className="bg-color">
              <div className="timer">
                <h3>Meet the patient</h3>
                <img src={clock} alt="" />
                <p>45 min</p>
                <div className="sound">
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="sound">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="date">
            <p1>39</p1>
            <p>Mar</p>
          </div>
          <img src={girl_blue} alt="" />
          <div className="profile">
            <h1>Balu prasad</h1>
            <p>Project Manager</p>
          </div>
          <div className="char_below">
            <div className="bg-color1">
              <div className="timer">
                <h3>Meet the patient</h3>
                <img src={clock} alt="" />
                <p>45 min</p>
                <div className="sound">
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="sound">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="date">
            <p1>30</p1>
            <p>Mar</p>
          </div>
          <img src={girl_darkblue} alt="" />
          <div className="profile">
            <h1>Balu prasad</h1>
            <p>Project Manager</p>
          </div>
          <div className="char_below">
            <div className="bg-color2">
              <div className="timer2">
                <h3>Meet the patient</h3>
                <img src={clock} alt="" />
                <p>45 min</p>
              </div>
              <div className="sound">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Positions;