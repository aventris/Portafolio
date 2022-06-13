import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import "@styles/BackgroundAnimation.scss";
const BackgroundAnimation = () => {
  const container = useRef(null);

  const random = (min, max) => {
    return gsap.utils.random(min, max);
  };

  const createUnit = () => {
    let unit = document.createElement("div"),
      w = container.current.offsetWidth,
      h = container.current.offsetHeight;

    unit.classList.add("unit");

    container.current.appendChild(unit);
    gsap.set(unit, {
      x: random(0, w),
      y: h,
      scale: random(0.2, 1),
      opacity: random(0.2, 0.6),
    });

    gsap.to(unit, {
      rotate: 360,
      y: random(h / 3, -250),
      //opacity: 0,
      scale: 0,
      duration: random(4, 15),
      delay: random(1, 4),
      onComplete: () => {
        container.current.removeChild(unit);
        createUnit();
      },
    });
  };

  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      createUnit();
    }
  }, []);

  return <div className="background-animation" ref={container}></div>;
};

export default BackgroundAnimation;
