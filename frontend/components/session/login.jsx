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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Login!</h2>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
        </label>
        <label>Password
          <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
        </label>
        <button>Sign in</button>
      </form>
    )
  }
}

export default Login