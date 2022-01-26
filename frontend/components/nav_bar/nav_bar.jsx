import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  let name;

  const display = currentUser ? (
    <div>
      Hello, {currentUser.firstName}
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">FaceCrook</h1>
      <div>
        {display}
      </div>
    </header>
  );
};

export default NavBar

