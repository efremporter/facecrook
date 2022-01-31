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
        {/* <li><Link className='nav-bar-home' to={"/feed"}><img src="f-logo.png"/></Link></li>
        <li>Search button logo</li>
        <li><Link to={"/feed"}><img src="../../../app/assets/images/home-button.png" /></Link></li>
        <li>Friends button</li>
        <li><a target="_blank" href="https://www.linkedin.com/in/efrem-porter-550b0b224"><img src="../../../app/assets/images/linked-in-logo.png"/></a></li>
        <li><a target="_blank" href="https://github.com/efremporter"><img src="../../../app/assets/images/github-logo.png"/></a></li> */}

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

