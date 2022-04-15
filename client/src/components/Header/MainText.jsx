import React from 'react';
import './header.css';

export default function MainText() {
  return (
    <div className="main-text">
      <p className="header-text">
        <span className='what'>What</span> <br />
        Would You Like <br /> To <span className='order'>Order</span> Today?
      </p>
      <p className="desc-service">
        Our job is to filling your tummy with delicious food with fast and free
        delivery.
      </p>
    </div>
  );
}

