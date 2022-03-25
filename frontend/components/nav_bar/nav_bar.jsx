import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentUser: null}
  }

  // componentDidMount() {
  //   if (this.props.currentUser) {
  //     this.props.fetchAuthor(this.props.currentUser.id)
  //     .then( user => {
  //       this.setState({currentUser: user})
  //     })
  //   }
  // }

  // componentDidUpdate() {
  //   if (this.state.currentUser) {
  //     if (this.props.currentUser.id !== this.state.currentUser.id) {
  //       this.props.fetchAuthor(this.props.currentUser.id)
  //       .then( user => {
  //         this.setState({currentUser: user})
  //       })
  //     }
  //   }
  // }
  
  componentWillUnmount() {
    this.setState({currentUser: null})
  }

  logout() {
    this.setState({currentUser: null})
    this.props.logout();
  }

  render() {
    let profileLink;
    if (this.state.currentUser) {
      profileLink = (
        <Link to={`/users/${this.state.currentUser.id}`}>
          <div className='nav-bar-photo-div'>
            <img className='nav-bar-photo' src={this.state.currentUser.profilePictureUrl}/>
            <span className='nav-bar-first-name'>{this.state.currentUser.firstName}</span>
          </div>
        </Link>
      )
    } else profileLink = null

    if (this.props.currentUser) {
      return (
        <div>
        <div className="nav-bar-container">
          <ul> 
            <li><Link to={`/feed`}><img className='nav-bar-f-logo' src={window.fLogo}/></Link></li>
            <li className='nav-bar-home-button-li'><Link to={"/feed"}><img className='nav-bar-home-button' src={window.homeButton} /></Link></li>
            <li className='nav-bar-linked-in-logo-li'><a target="_blank" href="https://www.linkedin.com/in/efrem-porter-550b0b224"><img className="nav-bar-linked-in-logo" src={window.linkedInLogo}/></a></li>
            <li className='nav-bar-github-logo-li'><a target="_blank" href="https://github.com/efremporter"><img className="nav-bar-github-logo" src={window.githubLogo}/></a></li>
            {/* {profileLink} */}
            <li className='logout-button-li'><button className="logout-button" onClick={this.logout.bind(this)}>Log Out</button></li>
          </ul>
        </div>
        <div className='nav-bar-placeholder'></div> 
      </div>
      )
    } else return null;
  }
}

export default NavBar

