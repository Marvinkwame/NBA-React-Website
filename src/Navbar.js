import React from "react";
import "./Nav.css";
import { GiHamburgerMenu, GiBasketballBall } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "./images/logo-nba.svg";

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu() {
    setShowMenu((prevShow) => !prevShow);
  }

  return (
    <header className="header nav-section">
      <nav className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="nba-logo" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>

        <div className="btns">
          <button className="tickets">Tickets</button>
          <button className="cta-btn">Sign In</button>
        </div>

        <div className="navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={80}
            className="menu"
            onClick={toggleMenu}
          />

          {showMenu && (
            <div className="navbar-smallscreen-overlay flex-center slide-bottom">
              <GiBasketballBall
                fontSize={30}
                className="overlay-close"
                onClick={toggleMenu}
              />
              <ul className="nav-smallscreen-links">
                <li onClick={toggleMenu} className="overlay-links">
                  <Link to="/">Home</Link>
                </li>
                <li onClick={toggleMenu} className="overlay-links">
                  <a href="/news">News</a>
                </li>
                <li onClick={toggleMenu} className="overlay-links">
                  <a href="/games">Games</a>
                </li>
                <li onClick={toggleMenu} className="overlay-links">
                  <a href="/store">Store</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
