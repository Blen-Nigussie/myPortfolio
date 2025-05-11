// Stars.js
import React, { useEffect } from 'react';
import '../index.css';

const Stars = () => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    const numStars = 100; // Adjust the number of stars

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      // Random size (between 1px and 3px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random animation delay for varied twinkling
      star.style.animationDelay = `${Math.random() * 2}s`;

      starsContainer.appendChild(star);
    }

    return () => {
      starsContainer.innerHTML = ''; // Clean up stars on unmount
    };
  }, []);

  return <div className="stars" />;
};

export default Stars;