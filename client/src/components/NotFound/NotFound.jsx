import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';

export default function NotFound() {
  defineLordIconElement(loadAnimation);
  return (
    <div className="main-notfound">
      <div className="container-notfound">
        <lord-icon
          src="https://cdn.lordicon.com/tdrtiskw.json"
          trigger="loop"
          colors="primary:#595959,secondary:#84b74d"
          style={{
            margin: '0 10px',
            width: '400px',
            height: '400px',
            position: 'absolute',
            top: '-27px',
          }}
        ></lord-icon>
        <div className="text">
          <h2>Oppss, we can't find these page!</h2>
          <Link to="/">
            <button className="back">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}