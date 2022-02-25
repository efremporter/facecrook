import React from 'react';

class PostFormClosed extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form className="post-form">
          <input className="post-form-file" type="text" placeholder="What's on your mind?" onClick={this.props.openModal}/>
          <hr className="post-form-divider"></hr>
        </form>
      </div>
    )
  }
}
//value={this.state.body} onChange={this.handleChange('body').bind(this)}
export default PostFormClosed;