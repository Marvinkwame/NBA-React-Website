import React from "react";
import logo from "../../images/logo-nba.svg"

function Subscribe() {
  return (
    <section className="section subscribe">
      <div className="container subscribe-container">
        <div className="logo-img">
        <img src={logo} alt="nba logo"  />
        </div>
        <h2 className="subscribe-title">
          Want every headline right at your fingertips? <br /> Sign up to receive NBA
          emails!
        </h2>

        <form className="form">
            <input type="text" placeholder="Email Address" />
            <button className="subscribe-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
