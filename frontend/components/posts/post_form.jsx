import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {body: "", authorId: window.currentUser.id, profileId: null, photo: null}
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({profileId: this.props.user.id})
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      if (this.state.profileId && this.state.profileId !== this.props.user.id) {
        this.setState({profileId: this.props.user.id})
      }
    } 
  }

  handleChange(key) {
    return e => {
      if (key === 'body') {
        this.setState({body: e.currentTarget.value})
      } else if (key === 'photo') {
        this.setState({photo: e.currentTarget.files[0]})
      }
    }
  }

  handleSubmit() {
    this.props.createPost(this.state)
    .then(() => {
      this.props.closeModal();
      this.setState({body: '', photo: null})
    })
  }

  getPictureLogo() {
    if (!this.state.photo) {
      return <img className="post-picture-icon" src={window.pictureIcon}/>
    } else {
      return <img className="post-picture-icon" src={window.checkMark}/>
    }
  }

  render() {
    return (
      <form className="profile-post-form" onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <h2 className="post-form-title" >Create Post</h2>
          <hr className='open-post-form-divider'/>
          <img className='x-button' onClick={this.props.closeModal} src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"></img>
        </div>
        <input onChange={this.handleChange('body')} value={this.state.body} placeholder="What's on your mind?" className='post-text-area'></input>
        <div className="add-to-post">
          <div className='add-to-post-text'>Add to your post</div>
          <label className="post-picture-icon-label">
            <div className='post-picture-icon-container'>
              {this.getPictureLogo()}
            </div>
            <input className="add-photo-to-post" type="file" onChange={this.handleChange('photo')}/>
          </label>
        </div>
        <button type="submit" className='post-form-button'>Post</button>
      </form>
    )
  }
}
//value={this.state.body} onChange={this.handleChange('body').bind(this)}
export default PostForm;