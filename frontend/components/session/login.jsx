import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
  }

  handleChange(key) {
    return e => {
      this.setState({[key]: e.currentTarget.value})
    }
  }

  render() {
    return (
      <div className="login-form-div">
        <div className="welcome-component">
          <h2 className="splash-logo">facecrook</h2>
          <div className="welcome-message">Connect with felons and the world around you on Facecrook.</div>
        </div>
        <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="login-input" id="first-login-input" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange('email')} />
          <input className="login-input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange('password')} />
          <button className="login-button">Log In</button>
          <button type="button" className="demo-user-login" onClick={this.props.logInGuest}>Sign In As Guest</button>
          <div className="login-divider">______________________________________________</div>
          <button type="button" className="create-user-redirect"><Link className="create-user-redirect" to="/signup">Create new account</Link></button>
        </form>
      </div>
    )
  }
}

export default Login