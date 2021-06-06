import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

/*
 * Menu
 */
const Menu: React.FC = () => (
  <div id="menu">
    <div className="buffer" />
    <h2>Main Menu</h2>
    <ul>
      <Link to="/game">
        <li>
          <span className="trim" />
          Game
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="21" height="36" viewBox="0 0 21 36">
            <path d="M0.004,25.709 C0.004,25.709 0.004,35.987 0.004,35.987 C0.004,35.987 20.986,18.000 20.986,18.000 C20.986,18.000 0.004,0.013 0.004,0.013 C0.004,0.013 0.004,10.291 0.004,10.291 C0.004,10.291 8.873,18.000 8.873,18.000 C8.873,18.000 0.004,25.709 0.004,25.709 Z" id="path-1" className="cls-2" fillRule="evenodd" />
          </svg>
        </li>
      </Link>
      <br />

      <Link to="/option">
        <li>
          <span className="trim" />
          Option
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="21" height="36" viewBox="0 0 21 36">
            <path d="M0.004,25.709 C0.004,25.709 0.004,35.987 0.004,35.987 C0.004,35.987 20.986,18.000 20.986,18.000 C20.986,18.000 0.004,0.013 0.004,0.013 C0.004,0.013 0.004,10.291 0.004,10.291 C0.004,10.291 8.873,18.000 8.873,18.000 C8.873,18.000 0.004,25.709 0.004,25.709 Z" id="path-1" className="cls-2" fillRule="evenodd" />
          </svg>
        </li>
      </Link>
      <br />

      <Link to="/statistic">
        <li>
          <span className="trim" />
          Statistic
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="21" height="36" viewBox="0 0 21 36">
            <path d="M0.004,25.709 C0.004,25.709 0.004,35.987 0.004,35.987 C0.004,35.987 20.986,18.000 20.986,18.000 C20.986,18.000 0.004,0.013 0.004,0.013 C0.004,0.013 0.004,10.291 0.004,10.291 C0.004,10.291 8.873,18.000 8.873,18.000 C8.873,18.000 0.004,25.709 0.004,25.709 Z" id="path-1" className="cls-2" fillRule="evenodd" />
          </svg>
        </li>
      </Link>
      <br />

      <Link to="/about">
        <li>
          <span className="trim" />
          About
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="21" height="36" viewBox="0 0 21 36">
            <path d="M0.004,25.709 C0.004,25.709 0.004,35.987 0.004,35.987 C0.004,35.987 20.986,18.000 20.986,18.000 C20.986,18.000 0.004,0.013 0.004,0.013 C0.004,0.013 0.004,10.291 0.004,10.291 C0.004,10.291 8.873,18.000 8.873,18.000 C8.873,18.000 0.004,25.709 0.004,25.709 Z" id="path-1" className="cls-2" fillRule="evenodd" />
          </svg>
        </li>
      </Link>
      <br />

      <Link to="/auth">
        <li>
          <span className="trim" />
          Auth
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="21" height="36" viewBox="0 0 21 36">
            <path d="M0.004,25.709 C0.004,25.709 0.004,35.987 0.004,35.987 C0.004,35.987 20.986,18.000 20.986,18.000 C20.986,18.000 0.004,0.013 0.004,0.013 C0.004,0.013 0.004,10.291 0.004,10.291 C0.004,10.291 8.873,18.000 8.873,18.000 C8.873,18.000 0.004,25.709 0.004,25.709 Z" id="path-1" className="cls-2" fillRule="evenodd" />
          </svg>
        </li>
      </Link>
    </ul>
  </div>
);

export default Menu;
