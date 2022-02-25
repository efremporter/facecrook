import React from 'react';
import PostFormContainer from '../posts/post_form_container';

class PostModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('HERE')
    this.props.fetchUser(this.props.userId)
    .then( () => this.setState({user: this.props.user}))
  }

  componentDidUpdate() {
    if (!this.props.user) {
      this.props.fetchUser(this.props.userId)
      .then( () => this.setState({user: this.props.user}))
    }
  }

  render() {
    console.log(this.state)
    if (this.props.modal === "post") {
      return (
        <div>
          <div className="modal-background" onClick={this.props.closeModal}></div>
          <div className="modal-child" id="post-form" onClick={e => e.stopPropagation()}>
            <PostFormContainer user={this.props.user}/>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default PostModal