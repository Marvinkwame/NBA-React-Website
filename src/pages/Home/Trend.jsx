import React from "react";
import card from "../../data/trend.js";
import data from "../../data/WestNews.js";
import { MdSlowMotionVideo } from "react-icons/md";

function Trend() {
  return (
    <section className="section trend-section">
      <div className="container trend-container">
        <h2 className="trend-title">Trending Stories</h2>

        <div className="trends-container">
          <div className="eastern-conference">
            <h2 className="conference-title">Eastern Conference</h2>
            <div className="card-container">
              {card.map((item, id) => {
                return (
                  <div key={id} className="card">
                    <img
                      src={`../images/${item.image}`}
                      alt="player"
                      className="trend-image"
                    />

                    <div className="details">
                      <MdSlowMotionVideo size={20} className="video" />
                      <p className="time">{item.time}</p>
                    </div>

                    <div className="card-info">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="west-container">
            <h2 className="conference-title">West Conference</h2>
            <div className="card-container">
              {data.map((item, id) => {
                return (
                  <div key={id} className="card">
                    <img
                      src={`../images/${item.image}`}
                      alt="player"
                      className="trend-image"
                    />

                    <div className="details">
                      <MdSlowMotionVideo size={20} className="video" />
                      <p className="time">{item.time}</p>
                    </div>

                    <div className="card-info">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trend;
