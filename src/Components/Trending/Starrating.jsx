import React, { useState } from 'react'

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
export default function Starrating({
  rating = 0,
  maxStars = 5,
  size = 24,
  activeColor = 'gold',
  inactiveColor = 'lightgrey' 
})
  {

  const fullStars = Math.floor(rating);
  const hasHalf = !Number.isInteger(rating);
  const emptyStars = maxStars - fullStars - (hasHalf ? 1 : 0);

  const stars = [];


  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar key={`full-${i}`} size={size} color={activeColor} />
    );
  }


  if (hasHalf) {
    stars.push(
      <FaStarHalfAlt key="half" size={size} color={activeColor} />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar key={`empty-${i}`} size={size} color={inactiveColor} />
    );
  }

  return (
  <div>{stars}</div>



  );
}
