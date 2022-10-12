import React from "react";
import data from "../../data/preseason";
import leaguepass from "../../images/lp-hor.svg";
import preseasonGame from "../../images/tnt2.jpg";

function Preseason() {
  return (
    <section className="section pre-season-section">
      <div className="container pre-season-container">
        <h2>Pre-Season Matchups</h2>

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
                      <p>PRESEASON</p>
                      <p className="match-time">{item.time}</p>
                      <p>LEAGUE PASS</p>
                    </div>
                    <div className="team-name">
                      <img src={`../images/${item.away}`} alt="away-team" />
                      <span>{item.awayteam}</span>
                    </div>
                  </div>
                  <div className="match-preview">
                    <p>
                      <a href="/">PREVIEW</a>
                    </p>
                    <p>
                      <a href="/">TICKETS</a>
                    </p>
                  </div>
                </div>
                <div className="players-info">
                  <h3>Last Season's Leaders</h3>
                  <h3>Player Statistics</h3>
                  <div className="players">
                    <div className="player-stats">
                      <img src={`../images/${item.homeplayerpic}`} alt="player" />
                      <p>{item.homeplayername}</p>
                      <p>PPG: 25.5</p>
                      <p>RPG: 5.2</p>
                      <p>APG: 6.3</p>
                    </div>
                    <div className="player-stats">
                      <img src={`../images/${item.awayplayerpic}`} alt="player" />
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

export default Preseason;
