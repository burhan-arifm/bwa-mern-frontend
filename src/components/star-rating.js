import React from 'react';
import propTypes from 'prop-types';

export default function StarRating({ value, size }) {
  const decimal = Number(value) % 1;
  const star = [];
  let val = value;

  for (let index = 0; index < 5; index++) {
    star.push(
      <svg key={ `star-${index + 1}` } width={ size * 1.25 } height={ size } viewBox="0 0 30 30">
        <path d="M14.0489 1.67705C14.3483 0.755738 15.6517 0.75574 15.9511 1.67705L18.6484 9.97847C18.7822 10.3905 19.1662 10.6695 19.5994 10.6695H28.328C29.2968 10.6695 29.6995 11.9091 28.9158 12.4785L21.8542 17.609C21.5037 17.8637 21.3571 18.315 21.4909 18.7271L24.1882 27.0285C24.4876 27.9498 23.4331 28.7159 22.6494 28.1465L15.5878 23.016C15.2373 22.7613 14.7627 22.7613 14.4122 23.016L7.3506 28.1465C6.56689 28.7159 5.51241 27.9498 5.81176 27.0285L8.50906 18.7271C8.64293 18.315 8.49627 17.8637 8.14579 17.609L1.08417 12.4785C0.300457 11.9091 0.703234 10.6695 1.67196 10.6695H10.4006C10.8338 10.6695 11.2178 10.3905 11.3516 9.97847L14.0489 1.67705Z" fill={ `url(#star-${index + 1})` } />
        <defs>
          <linearGradient id={ `star-${index + 1}` } x1="0%" x2="100%">
            <stop className="score" offset={ (val > 0) ? ((val < 1) ? decimal : "1") : "0" } stopColor="#FFCC47" />
            <stop className="placeholder" offset="0" stopColor="#ADB5BD" />
          </linearGradient>
        </defs>
      </svg>
    );
    val -= 1;
  }

  return (
    <>
      <div className="stars">
        { star }
      </div>
    </>
  );
}

StarRating.propTypes = {
  value: propTypes.number,
  size: propTypes.number
}