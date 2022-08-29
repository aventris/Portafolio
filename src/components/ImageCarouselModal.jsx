import React, { useEffect, useRef, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { CgClose } from "react-icons/cg";

import "../styles/ImageCarouselModal.scss";

const ImageCarouselModal = ({ images, onToggleModal }) => {
  const [toggleAnimation, setToggleAnimation] = useState(false);
  const boxRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClick);
    setToggleAnimation(true);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [boxRef]);

  const handleClose = () => {
    setToggleAnimation(false);
    setTimeout(() => {
      onToggleModal();
    }, 500);
  };

  return (
    <div
      className={`imageCarouselModal${
        toggleAnimation ? " visible" : " hidden"
      }`}
    >
      <div className="container" ref={boxRef}>
        <CgClose onClick={handleClose} />
        <ImageCarousel images={images} />
      </div>
    </div>
  );
};

export default ImageCarouselModal;
