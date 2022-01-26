import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  let name;

  const display = currentUser ? (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="button" to="/signup">Sign Up</Link>
      <Link className="button" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  );
};

export default NavBar

