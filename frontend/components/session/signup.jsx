import React from 'react'

class SignUp extends React.Component {

  constructor(props) { 
    super(props)
    this.state = {first_name: '', last_name: '', email: '', password: ''}
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
    this.setState({first_name: '', last_name: '', email: '', password: ''})
  }

  handleClick() {
    this.props.logInGuest();
  }

  render() {
    return (
      <div className='session-form'>  
        <h2 className='sign-up'>Sign Up</h2>
        <img className='x-button' onClick={this.props.closeModal} src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"></img>
        <div className='sub-header'>It's quick and easy</div>
        <hr className='sign-up-divider'></hr>
        <form className='sign-up-form' onSubmit={this.handleSubmit.bind(this)}>
          <input className="sign-up-input" type="text" placeholder='First name' value={this.state.first_name} onChange={this.handleChange('first_name')} />
          <input className="sign-up-input" id="sign-up-last-name" type="text" placeholder='Last name' value={this.state.last_name} onChange={this.handleChange('last_name')} />
          <input className="sign-up-input" id="sign-up-email" type="text" placeholder='Email' value={this.state.email} onChange={this.handleChange('email')}/>
          <input className="sign-up-input" id="sign-up-password" type="password" placeholder='New password' value={this.state.password} onChange={this.handleChange('password')} />
          <button className="sign-up-button" type="submit">Sign Up</button>
          <button className="sign-up-demo" type="button" onClick={this.handleClick.bind(this)}>Guest Login</button>
        </form>
      </div>
    )
  }
}

export default SignUp