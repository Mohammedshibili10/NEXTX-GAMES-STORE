import React, { useState } from "react";
import apex from "../assets/Images/apex.png";
import witch from "../assets/Images/witch.png";
import warhammer from "../assets/Images/warhammer.png";
import "../assets/components/Dot.css";



const Dots = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const dotImages = [warhammer, witch, apex];

  return (
    <div className="dots-wrapper">
      <div className="dashed-line"></div>

      <div className="dots-container">
        {dotImages.map((img, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img  src={img} alt={`dot-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dots;
