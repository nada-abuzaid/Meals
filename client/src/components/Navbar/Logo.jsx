import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link to='/' className='logo'>
        <span className='logo-span'>M</span>eals
      </Link>
    </div>
  );
}
