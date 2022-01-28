import React from 'react';
import { Link } from 'react-router-dom';

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props)
//   }
// }
const NavBar = ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div className="nav-bar-container">
      <ul>
        <li><Link className='nav-bar-home' to={"/feed"}><img src="../../../app/assets/images/Facebook-logo.png"/></Link></li>
        <li>Search button logo</li>
        <li>Home button</li>
        <li>Friends button</li>
        <li>LinkedIn Link</li>
        <li>Github Link</li>

      </ul>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    null
  );

  return (
      <div>
        {display}
      </div>
  );
};

export default NavBar

