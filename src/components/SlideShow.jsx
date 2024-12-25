import React, { useState, useEffect, useRef } from "react";
import "./Styles.css";
import slideImage from "../constants/images/slides/slide3.jpg";

const titles = [
  { title: "Web Design & Development" },
  { title: "Mobile App Design & Development" },
  { title: "Graphic Design" },
  { title: "Software Maintenance and Support" },
  { title: "Embedded System Development" },
  { title: "Internet of Things" },
];

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Speed of typing
  const deletingSpeed = 75; // Speed of deleting
  const pauseDuration = 2000; // Pause duration between typing and deleting
  const currentTitle = titles[currentIndex].title;

  const typeTimeout = useRef(null);

  useEffect(() => {
    // Function to handle typing and deleting effect
    const handleTyping = () => {
      if (!isDeleting && typedText.length < currentTitle.length) {
        setTypedText(currentTitle.substring(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentTitle.substring(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === currentTitle.length) {
        setIsDeleting(true);
        typeTimeout.current = setTimeout(handleTyping, pauseDuration);
        return;
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }

      typeTimeout.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    };

    typeTimeout.current = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typeTimeout.current);
  }, [typedText, isDeleting, currentTitle]);

  return (
    <div className="slide-container">
      <img src={slideImage} alt="slide" className="static-image" />

      <h1 className="main-title font-mono text-3xl lg:text-6xl">
        Innovating Ideas with Cutting-Edge Technology
      </h1>

      <div className="typing-container font-serif text-xl lg:text-3xl px-2">
        <span className="typed-title">{typedText}</span>
        <span className="cursor text-white">|</span>
      </div>

      <p className="main-text text-3xl text-blue-400">SPARKWARE</p>
    </div>
  );
}

export default SlideShow;
