import React from "react";

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
        <h2 className="splash-logo">facecrook</h2>
        <div className="welcome-message">Connect with felons and the world around you on Facecrook.</div>
        <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="login-input" id="first-login-input" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange('email')} />
          <input className="login-input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange('password')} />
          <button className="login-button">Log In</button>
        </form>
      </div>
    )
  }
}

export default Login