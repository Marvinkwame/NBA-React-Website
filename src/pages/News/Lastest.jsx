import React from "react";
import lastestData from "../../data/Lastest.js";
import shaqpodcast from "../../images/shaq.jpg"
import steamlogo from "../../images/Steamroom-Logo.png"

function Lastest() {
  return (
    <section className="section lastest ">
      <div className="container lastest-part">
        <h2>Lastest In The NBA</h2>
        <hr />

        <div className="lastest-container">
          <article className="lastest-section">
            {lastestData.map((item, id) => {
              return (
                <div className="lastest-card" key={id}>
                  <img src={`../images/${item.image}`} alt={item.alt} />
                  <div className="lastest-info">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </article>

          <aside className="lastest-aside">
            <section className="aside-lastest-section">
              <div className="aside-story">
                <h2>Top Stories</h2>
                <p>Celtics' Gallinari suffers MCL tear in left knee</p>
                <span className="story-date">12 hours ago</span>
              </div>

              <div className="aside-story">
                <h2>Power Rankings</h2>
                <p>Offseason Power Rankings: Warriors, Suns lead West</p>
                <span className="story-date">August 2, 2022</span>
              </div>

              <div className="aside-story">
                <h2>Drew League</h2>
                <p>Drew League: Melton, Wright lead 2022 champs</p>
                <span className="story-date">August 22, 2022</span>
              </div>
            </section>

            <div className="aside-podcast-section">
              <div className="podcast-heading">
                <h3>Podcast</h3>
                <p className="podcast-link">See all</p>
              </div>
              <div className="podcast-logo">
                <img src={shaqpodcast} alt="Shaq-Podcast" />
                <img src={steamlogo} alt="Steam-Logo" />
              </div>
            </div>

            <div className="aside-section-links">
              <h2>Quick Links</h2>
              <ul className="aside-links">
                <li className="aside-link">
                  <a href="/">Key Dates</a>
                </li>
                <li className="aside-link">
                  <a href="/">NBA History</a>
                </li>
                <li className="aside-link">
                  <a href="/">Trade Tracker</a>
                </li>
                <li className="aside-link">
                  <a href="/">NBA Awards</a>
                </li>
                <li className="aside-link">
                  <a href="/">2022 NBA Draft</a>
                </li>
                <li className="aside-link">
                  <a href="/">2022 NBA All Star</a>
                </li>
                <li className="aside-link">
                  <a href="/">2022 Summer League</a>
                </li>
                <li className="aside-link">
                  <a href="/">Hall of Fame: Class of 2022</a>
                </li>
                <li className="aside-link">
                  <a href="/">NBA 75</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Lastest;
