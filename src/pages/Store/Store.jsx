import React from "react";
import "./Store.css";
import storepic from "../../images/store.webp";
import Jersey from "./Jersey";

function Store() {
  return (
    <main>
      <section className="section ">
        <div className="store-bar">
          <h2>SIGN UP & SAVE 10% | DEAL ENDS SOON</h2>
        </div>
        <div className="container">
          <img src={storepic} alt="store-info" />
        </div>
      </section>
      <Jersey />
    </main>
  );
}

export default Store;
