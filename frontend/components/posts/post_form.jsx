import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {body: "", author_id: window.currentUser.id, photo: null}
  }

  handleChange(key) {
    return e => {
      if (key === 'body') {
        this.setState({body: e.currentTarget.value})
      } else {
        this.setState({photo: e.currentTarget.files[0]})
      }
    }
  }

  handleSubmit() {
    console.log('postpost')
    console.log(this.props)
    this.props.createPost(this.state)
    this.props.closeModal();
  }

  render() {
    if (!this.props.modal) {
      return (
        <div>
          <form className="post-form">
            <input className="post-form-file" type="text" placeholder="What's on your mind?" onClick={this.props.openModal}/>
            <hr className="post-form-divider"></hr>
          </form>
        </div>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <h2 className="post-form-title" >Create Post</h2>
            <hr className='open-post-form-divider'/>
            <img className='x-button' onClick={this.props.closeModal} src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"></img>
          </div>
          <textarea onChange={this.handleChange('body')} value={this.state.body} autofocus="autofocus" placeholder="What's on your mind?" className='post-text-area'></textarea>
          <div className="add-to-post">
            <div className='add-to-post-text'>Add to your post</div>
            <div className='post-picture-icon-container'><img className="post-picture-icon" src={window.pictureIcon}/></div>
          </div>
          <button type="submit" className='post-form-button'>Post</button>
        </form>
      )
    }
  }

}
//value={this.state.body} onChange={this.handleChange('body').bind(this)}
export default PostForm;