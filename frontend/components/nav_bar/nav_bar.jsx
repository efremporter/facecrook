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
        <li><Link to={"/feed"}><img className='nav-bar-f-logo' src={window.fLogo}/></Link></li>
        <li><Link to={"/feed"}><img className='nav-bar-home-button' src={window.homeButton} /></Link></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/efrem-porter-550b0b224"><img className="nav-bar-linked-in-logo" src={window.linkedInLogo}/></a></li>
        <li><a target="_blank" href="https://github.com/efremporter"><img className="nav-bar-github-logo" src={window.githubLogo}/></a></li>
        <li><button className="logout-button" onClick={logout}>Log Out</button></li>
      </ul>
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

