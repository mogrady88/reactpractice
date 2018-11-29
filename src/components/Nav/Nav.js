import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Game from '../Game';
import CardCreator from '../CardCreator';
import Default from '../Default';
import './Nav.css';

const NavBar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Default</Link>
            </li>
            <li>
              <Link to="/stars/">Stars</Link>
            </li>
            <li>
              <Link to="/cards/">Cards</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Default} />
        <Route path="/stars/" component={Game} />
        <Route path="/cards/" component={CardCreator} />
      </div>
    </Router>
  );
};

export default NavBar;
