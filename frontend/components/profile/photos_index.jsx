import React from "react";

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {postsWithPhotos: []}
  }

  componentDidMount() {
    this.getPhotos();
  }

  componentDidUpdate(prevProps) {
    if (this.props.posts.length !== prevProps.posts.length) {
      this.setState({postsWithPhotos: []})
      this.getPhotos();
    }
  }

  componentWillUnmount() {
    this.setState({postsWithPhotos: []})
  }

  getPhotos() {
    let postsWithPhotos = []
    this.props.posts.forEach( post => {
      if (post.photoUrl && post.profileId === post.authorId) {
        postsWithPhotos.push(post)
      }
    })
    this.setState({postsWithPhotos})
  }

  getDivider() {
    if (this.state.postsWithPhotos.length) {
      return <hr className="mini-photo-index-divider"></hr>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='profile-body-container'>
        <div className='mini-friend-index-div' id="photo-index-div">
          <div className='mini-friend-index-header' id="photo-index-header">
            <div className='mini-friend-index-title' id="photo-index-title">Photos</div>
          </div>
            <ul className='mini-friend-index-image-ul' id="photo-index-image-ul">
              {this.state.postsWithPhotos.map( (post, idx) => {
                if (idx <= 8) {
                  return <li key={idx} className='mini-friend-index-image-li' id="photo-index-image-li">
                      <img className='mini-friend-index-image' id="photo-index-image" src={post.photoUrl}/>
                    </li>
                }
              })}
            </ul>
            {this.getDivider()}
        </div>
      </div>
    )
  }
}

export default PhotosIndex