import React from "react";

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {postsWithPhotos: []}
  }

  getPhotos() {
    let postsWithPhotos = this.state.postsWithPhotos
    this.props.posts.forEach( post => {
      if (post.photoUrl) {
        postsWithPhotos.push(post)
      }
    })
    this.setState({postsWithPhotos})
  }

  render() {
    return (
      <div className='mini-friend-index-div'>
        <div className='mini-friend-index-header'>
          <span className='mini-friend-index-title'>Photos</span>
          <span className='link-to-full-friends-index'>See all photos</span>
        </div>
        <ul className='mini-friend-index-image-ul'>
          {this.state.postsWithPhotos.forEach( (post, idx) => {
            if (idx <= 8) {
              return <li key={idx} className='mini-friend-index-image-li'>
                  <img className='mini-friend-index-image' src={post.photoUrl}/>
                </li>
            }
          })}
        </ul>
      </div>
    )
  }
}

export default PhotosIndex