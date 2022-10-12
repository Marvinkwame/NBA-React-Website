import React from "react";
import data from "../../data/openNight.js";
import leaguepass from "../../images/lp-hor.svg";
import preseasonGame from "../../images/tnt5.jpg";

function OpeningNight() {
  return (
    <section className="section opening-night-section">
      <div className="container opening-night-container">
        <h2>Opening Night</h2>

        <hr />

        <div className="pre-season-cards">
          {data.map((item, id) => {
            return (
              <div key={id} className="match-card">
                <div className="match-info">
                  <div className="teams-info">
                    <div className="team-name">
                    <img src={`../images/${item.home}`} alt="home-team" />
                    <span>{item.hometeam}</span>
                    </div>
                    <div className="time-info">
                      <p>OPENING NIGHT</p>
                      <p className="match-time">{item.time}</p>
                      <p>LEAGUE PASS</p>
                    </div>
                    <div className="team-name">
                      <img src={`../images/${item.away}`} alt="away-team" />
                      <span>{item.awayteam}</span>
                    </div>
                  </div>
                  <div className="match-preview">
                    <p>PREVIEW</p>
                    <p>TICKETS</p>
                  </div>
                </div>
                <div className="players-info">
                  <h3>Last Season's Leaders</h3>
                  <h3>Player Statistics</h3>
                  <div className="players">
                    <div className="player-stats">
                      <img
                        src={`../images/${item.homeplayerpic}`}
                        alt="player"
                      />
                      <p>{item.homeplayername}</p>
                      <p>PPG: 25.5</p>
                      <p>RPG: 5.2</p>
                      <p>APG: 6.3</p>
                    </div>
                    <div className="player-stats">
                      <img
                        src={`../images/${item.awayplayerpic}`}
                        alt="player"
                      />
                      <p>{item.awayplayername}</p>
                      <p>PPG: 25.5</p>
                      <p>RPG: 5.2</p>
                      <p>APG: 6.3</p>
                    </div>
                  </div>
                </div>
                <div className="league-logo">
                  <img src={leaguepass} alt="league-pass-logo" />
                  <h3>Available On</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pre-season-pic">
          <img src={preseasonGame} alt="NBA-on-TNT" />
        </div>
      </div>
    </section>
  );
}

export default OpeningNight;
