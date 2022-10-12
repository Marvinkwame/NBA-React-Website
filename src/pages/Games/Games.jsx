import React from "react";
import OpenNight from "./OpeningNight";
import "./Games.css";
import Preseason from "./Preseason";

function Games() {
  return (
    <main>
      <section className="section hero-image">
        <div className="container">
          <div className="games-hero">
            <h2>2022-2023 NBA SEASON</h2>
          </div>
        </div>
      </section>
      <Preseason />
      <OpenNight />
    </main>
  );
}

export default Games;
