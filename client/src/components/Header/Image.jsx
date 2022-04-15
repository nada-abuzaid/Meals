import React from 'react'
import image from './img/mainFood.png';

export default function Image() {
  return (
    <div className="main-img">
      <img src={image} alt="main img" className="img" />
    </div>
  );
}
