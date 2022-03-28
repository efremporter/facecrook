import React from "react";
import { Link } from "react-router-dom";

class PhotosIndexMini extends React.Component {
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
      <div className='mini-friend-index-div'>
        <div className='mini-friend-index-header' id="mini-photo-index-header">
          <span className='mini-friend-index-title'>Photos</span>
          <Link to={`/users/${this.props.userId}/photos`}><span className='link-to-full-friends-index'>See all photos</span></Link>
        </div>
          <ul className='mini-friend-index-image-ul'>
            {this.state.postsWithPhotos.map( (post, idx) => {
              if (idx <= 8) {
                return <li key={idx} className='mini-friend-index-image-li' id="mini-photo-index-image-li">
                    <Link to={`/users/${this.props.userId}/photos`}><img className='mini-friend-index-image' id="mini-photo-index-image" src={post.photoUrl}/></Link>
                  </li>
              }
            })}
          </ul>
          {this.getDivider()}
      </div>
    )
  }
}

export default PhotosIndexMini