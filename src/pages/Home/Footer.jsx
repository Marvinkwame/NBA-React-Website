import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-content">
          <div className="footer-links">
            <div>
              <h3 className="footer-title">NBA ORGANIZATION</h3>
              <ul className="footer-extra-link">
                <li className="footer-extra-links">NBA Official</li>
                <li className="footer-extra-links">NBA careers</li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">NBA INITIATIVES</h3>
              <ul className="footer-extra-link">
                <li className="footer-extra-links">NBA Cares</li>
                <li className="footer-extra-links">Jr. NBA</li>
                <li className="footer-extra-links">NBA Foundation</li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Across</h3>
              <ul className="footer-extra-link">
                <li className="footer-extra-links">NBA Communications</li>
                <li className="footer-extra-links">Lockervision</li>
                <li className="footer-extra-links">NBA Transactions</li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Shop</h3>
              <ul className="footer-extra-link">
                <li className="footer-extra-links">Global Store</li>
                <li className="footer-extra-links">NYC Store</li>
                <li className="footer-extra-links">NBA Auctions</li>
              </ul>
            </div>
          </div>

          <div className="subscribe-footer">
            <h3 className="footer-title">SUBSCRIPTIONS</h3>
            <ul className="footer-extra-link">
              <li className="footer-extra-links">NBA TV</li>
              <li className="footer-extra-links">League Pass</li>
              <li className="footer-extra-links">Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="footer-info">
          <div>
            <h3 className="footer-info-title">2022 Marvin Projects</h3>
            <h3 className="footer-info-title">
              &#169; Marvin Kwame All rights reserved
            </h3>
          </div>

          <div className="footer-privacy">
            <a href="#home">Terms & Agreements</a>
            <a href="#home">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
