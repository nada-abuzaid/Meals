import React from 'react';
import { Link } from 'react-router-dom';

export default function CartIcon({ cart }) {
  return (
    <Link to="/cart" className="cart">
      <span className="cart-basket">{cart}</span>
      <lord-icon
        src="https://cdn.lordicon.com/slkvcfos.json"
        trigger="hover"
        colors="primary:#595959,secondary:#84b74d"
        style={{ margin: '0 6px' }}
        ></lord-icon>
    </Link>
  );
}
