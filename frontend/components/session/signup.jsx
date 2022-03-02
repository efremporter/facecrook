import React from 'react'

class SignUp extends React.Component {

  constructor(props) { 
    super(props)
    this.state = {first_name: '', last_name: '', email: '', password: '', errors: []}
  }

  handleChange(key) {
    return e => {
      this.setState({[key]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let capitalizedFirstName = this.state.first_name[0].toUpperCase() + this.state.first_name.slice(1).toLowerCase();
    let capitalizedLastName = this.state.last_name[0].toUpperCase() + this.state.last_name.slice(1).toLowerCase();
    this.setState({first_name: capitalizedFirstName, last_name: capitalizedLastName}, () => {
      this.props.createNewUser(this.state)
      .then(() => {
        this.props.history.push('/');
        this.setState({first_name: '', last_name: '', email: '', password: ''})
      })
      .catch(() => this.handleErrors())
    })
  }

  isEmpty(str) {
    return str.length === 0
  }

  handleClick() {
    this.props.logInGuest();
  }

  handleErrors() {
    if (!this.props.errors) return null;
    let errors = [];
    if (this.isEmpty(this.state.first_name) || this.isEmpty(this.state.last_name)) {
      errors.push('First and Last name required')
    }
    if (this.isEmpty(this.state.email)) errors.push('Email field required')
    if (this.state.password.length < 6) errors.push('Password must be at least 6 characters')
    this.setState({errors: errors});
  }

  render() {
    return (
      <div className='session-form'>  
        <h2 className='sign-up'>Sign Up</h2>
        <img className='x-button' onClick={this.props.closeModal} src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"></img>
        <div className='sub-header'>It's quick and easy</div>
        <hr className='sign-up-divider'></hr>
        <form className='sign-up-form' onSubmit={this.handleSubmit.bind(this)}>
          <input className="sign-up-input" id="sign-up-first-name" type="text" placeholder='First name' value={this.state.first_name} onChange={this.handleChange('first_name')} />
          <input className="sign-up-input" id="sign-up-last-name" type="text" placeholder='Last name' value={this.state.last_name} onChange={this.handleChange('last_name')} />
          <input className="sign-up-input" id="sign-up-email" type="text" placeholder='Email' value={this.state.email} onChange={this.handleChange('email')}/>
          <input className="sign-up-input" id="sign-up-password" type="password" placeholder='New password' value={this.state.password} onChange={this.handleChange('password')} />
          <ul>{this.state.errors.map(error => {
            return <li className='sign-up-error'>{error}</li>
          })}</ul>
          <button className="sign-up-button" type="submit">Sign Up</button>
          <button className="sign-up-demo" type="button" onClick={this.handleClick.bind(this)}>Guest Login</button>
        </form>
      </div>
    )
  }
}

export default SignUp