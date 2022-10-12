import React from "react";
import kdirving from "../../images/kd-irving.jpg";
import myData from "../../data/NewsHero";
import "./News.css";
import Lastest from "./Lastest";

function News() {
  return (
    <main className="section">
      <header className="news-container container">
        <div className="news-hero">
          <div className="news-home">
            <img src={kdirving} alt="kd-and-kyrie" className="news-image" />

            <div className="news-info">
              <h2>
                The Brooklyn Nets are running it back with Kevin Durant and
                Kyrie Irving
              </h2>
              <p>
                The Nets say Kevin Durant and the team have 'one collective goal
                in mind' of bringing an NBA title to Brooklyn.
              </p>
            </div>
          </div>

          <aside className="news-section-aside">
            {myData.map((item, id) => {
              return (
                <div className="aside-news-card" key={id}>
                  <img
                    src={`../images/${item.image}`}
                    alt={item.alt}
                    className="news-aside-image"
                  />
                  <div className="news-aside-info">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </aside>
        </div>

        <div className="extra-news">
          <div className="extra-news-card">
            <h2>Crypto.com Arena announces plans for upgrades</h2>
            <p>
              The arena, which is home to the Los Angeles Lakers, has a
              'comprehensive slate of renovations' planned that with
            </p>
            <p>August 20, 2022</p>
          </div>
          <div className="extra-news-card">
            <h2>Crypto.com Arena announces plans for upgrades</h2>
            <p>
              The arena, which is home to the Los Angeles Lakers, has a
              'comprehensive slate of renovations' planned that with
            </p>
            <p>August 20, 2022</p>
          </div>
          <div className="extra-news-card">
            <h2>Crypto.com Arena announces plans for upgrades</h2>
            <p>
              The arena, which is home to the Los Angeles Lakers, has a
              'comprehensive slate of renovations' planned that with
            </p>
            <p>August 20, 2022</p>
          </div>
          <div className="extra-news-card">
            <h2>Crypto.com Arena announces plans for upgrades</h2>
            <p>
              The arena, which is home to the Los Angeles Lakers, has a
              'comprehensive slate of renovations' planned that with
            </p>
            <p>August 20, 2022</p>
          </div>
        </div>
      </header>
      <Lastest />
    </main>
  );
}

export default News;
