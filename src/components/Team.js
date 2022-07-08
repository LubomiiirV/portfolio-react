import React from "react";
import "../style-components/team.css";
import Harry from "../images/harry.jpg";
import Monkey from "../images/monkey.jpg";
import Sloth from "../images/friend.jpg";
import Daddy from "../images/c86.png";
import Sponge from "../images/sponge.png";

function Team() {
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">Môj tím</h2>
        <p className="pe">Sekcia založená pre demonštráciu JS/jQuery</p>
        <div className="carousel owl-carousel">
          <div className="card">
            <div className="box">
              <img src={Harry} alt="harry" />
              <div className="text">Mr. Harry</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={Monkey} alt="monkey" />
              <div className="text">Mr. Monkey</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={Sloth} alt="sloth" />
              <div className="text">Mr. Sloth</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={Daddy} alt="daddy" />
              <div className="text">Mr. Daddy</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={Sponge} alt="sponge" />
              <div className="text">Mr. Sponge</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
