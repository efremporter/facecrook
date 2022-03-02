import React from 'react';

class PostFormClosed extends React.Component {

  constructor(props) {
    super(props)
  }

  getDivider() {
    if (this.props.modal) return null;
    return <hr className="post-form-divider"></hr>
  }

  render() {
    return (
      <div className='post-form-closed-container'>
        <form className="post-form">
          <div className="post-form-closed-input"><input value="" className="post-form-file" type="text" placeholder="What's on your mind?" onClick={this.props.openModal} readOnly/></div>
          {this.getDivider()}
        </form>
      </div>
    ) 
  }
}

export default PostFormClosed;