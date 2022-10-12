import React from "react";
import matches from "../../data/schedule.js";
import { MdSlowMotionVideo } from "react-icons/md";

function Schedule() {
  return (
    <section className="section">
      <div className="container schedule-container">
        <h2>2022/2023 NBA Season</h2>
        <hr />

        <div className="schedule">
          <div className="card-container">
            {matches.map((item, id) => {
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
    </section>
  );
}

export default Schedule;
