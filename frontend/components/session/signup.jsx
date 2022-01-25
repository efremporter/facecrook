import React from 'react'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: '', email: '', password: ''}
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
  }

  render() {
    return (
      <div className='session-form'>  
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Username 
            <input type="text" value={this.state.name} onChange={this.handleChange('name')} />
          </label>
          <label>Email 
            <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </label>
          <label>Password 
            <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUp