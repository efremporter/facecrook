import React from 'react'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {firstName: '', last_name: '', email: '', password: ''}
  }

  handleChange(key) {
    return e => {
      this.setState({[key]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createNewUser(this.state)
    .then( () => this.props.history.push('/'))
    this.setState({firstName: '', last_name: '', email: '', password: ''})
  }

  render() {
    return (
      <div className='session-form'>  
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>First Name
            <input type="text" value={this.state.firstName} onChange={this.handleChange('firstName')} />
          </label>
          <label>Last Name
            <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')} />
          </label>
          <label>Email 
            <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </label>
          <label>Password 
            <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <button type="submit">Submit</button>
        <button type="button" onClick={this.props.logInGuest}>Guest Login</button>
        </form>
      </div>
    )
  }
}

export default SignUp