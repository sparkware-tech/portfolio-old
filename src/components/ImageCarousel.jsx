import React from "react";
import "./Styles.css";
import image1 from "../constants/images/tech/react.png";
import image2 from "../constants/images/tech/angular.png";
import image3 from "../constants/images/tech/android.png";
import image4 from "../constants/images/tech/ps.png";
import image5 from "../constants/images/tech/java.png";
import image6 from "../constants/images/tech/js.png";
import image7 from "../constants/images/tech/ios.png";
import image8 from "../constants/images/tech/nodejs.png";
import image9 from "../constants/images/tech/python.png";
import image10 from "../constants/images/tech/mongo.png";
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const ImageCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
