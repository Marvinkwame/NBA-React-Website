import React from "react";
import jerseyData from "../../data/JerseyData";

function Jersey() {
  return (
    <section className="section">
      <div className="container jersey-section">
        <h2>Top Selling Jerseys</h2>

        <div className="jersey-container">
          {jerseyData.map((item, id) => {
            return (
              <div className="jersey-card" key={id}>
                <img src={`../images/${item.jerseyImage}`} alt={item.alt} />
                <div className="jersey-info">
                    <span>{item.price}</span>
                    <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Jersey;
