import React from "react";
import myData from "../../data/Pro.js";
import gleague from "../../images/logo-gleague.svg";
import wnba from "../../images/logo-wnba.svg";
import africanleague from "../../images/logo-bal.svg";
import nba2k from "../../images/logo-2k.svg";
import { AiFillTwitterCircle, AiOutlineYoutube } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitch } from "react-icons/bs";
import { FaSnapchat, FaTiktok } from "react-icons/fa";

function Pro() {
  return (
    <section className="section pro">
      <div className="container">
        <h2>Around The NBA</h2>
        <hr />

        <div className="pro-section">
          <article className="article">
            {myData.map((item, id) => {
              return (
                <div className="news-card" key={id}>
                  <img src={`../images/${item.image}`} alt={item.alt} className="pro-image" />
                  <div className="details-info">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </article>

          <aside className="aside">
            <div className="aside-card">
              <h2>More League Info</h2>
              <ul className="leagues">
                <li className="league-link">
                  <img src={gleague} alt="G-League" />
                  <a href="/">G League</a>
                </li>
                <li className="league-link">
                  <img src={wnba} alt="G-League" />
                  <a href="/">WNBA</a>
                </li>
                <li className="league-link">
                  <img src={africanleague} alt="G-League" />
                  <a href="/">Basketball African League</a>
                </li>
                <li className="league-link">
                  <img src={nba2k} alt="G-League" />
                  <a href="/">NBA 2K League</a>
                </li>
              </ul>
            </div>

            <div className="aside-social-links">
              <h2>Follow the NBA</h2>
              <div className="social-media-links">
                <BsFacebook size={30} />
                <BsTwitch size={30} />
                <BsInstagram size={30} />
                <AiFillTwitterCircle size={30} />
                <AiOutlineYoutube size={30} />
                <FaSnapchat size={30} />
                <FaTiktok size={30} />
              </div>
            </div>

            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul className="leagues">
                <li className="quick-link">
                  <a href="/">Fanatsy</a>
                </li>
                <li className="quick-link">
                  <a href="/">NBA History</a>
                </li>
                <li className="quick-link">
                  <a href="/">NBA Official</a>
                </li>
                <li className="quick-link">
                  <a href="/">NBA Awards</a>
                </li>
                <li className="quick-link">
                  <a href="/">2022 NBA Draft</a>
                </li>
                <li className="quick-link">
                  <a href="/">2022 NBA Playoffs</a>
                </li>
                <li className="quick-link">
                  <a href="/">2022 Summer League</a>
                </li>
                <li className="quick-link">
                  <a href="/">Key Dates</a>
                </li>
                <li className="quick-link">
                  <a href="/">Locker Vision</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Pro;
