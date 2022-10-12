import React from "react";
import "./hoome.css";
import data from "../../data/homeslider.js";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Trend from "./Trend.jsx";
import Schedule from "./Schedule.jsx";
import Pro from "./Pro.jsx";
import Subscribe from "./Subscribe";

function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const length = data.length;

  let intervalTime = 5000;

  React.useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  

  React.useEffect(() => {
    const autoScroll = true;
    let slideInterval;
    
    function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
    
    if (autoScroll) {
      auto();
    }
    
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <main>
      <section className="hero section">
        <div className="slider">
          <BsFillArrowLeftCircleFill
            className="left-btn arrow"
            size={35}
            onClick={prevSlide}
          />
          <BsFillArrowRightCircleFill
            className="right-btn arrow"
            onClick={nextSlide}
            size={35}
          />

          {data.map((item, index) => {
            return (
              <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
              >
                {index === currentSlide && (
                  <>
                    <img src={`../images/${item.image}`} alt="hero" />
                    <div className="content">
                      <h2 className="headline">{item.title}</h2>
                      <p className="info">{item.text}</p>
                      <hr />
                      <button className="read-btn">Read More</button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <Trend />
      <Schedule />
      <Pro />
      <Subscribe />
    </main>
  );
}

export default Home;
