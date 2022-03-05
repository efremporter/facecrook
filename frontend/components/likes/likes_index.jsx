import React from "react";

class LikesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {likedPost: null}
    this.countLikes = this.countLikes.bind(this)
    this.addLike = this.addLike.bind(this)
    this.removeLike = this.removeLike.bind(this)
  }

  componentDidMount() {
    let likedPost = false;
    this.props.likes.forEach( like => {
      if (like.likerId === this.props.currentUser.id && like.postId === this.props.postId) {
        likedPost = true;
      }
    })
    this.setState({likedPost})
  }

  addLike() {
    console.log(this.props)
    this.props.createLike({likerId: this.props.currentUser.id, postId: this.props.postId})
      .then( () => this.setState({likedPost: true}))
  }

  removeLike() {
    let id = null;
    this.props.likes.forEach( like => {
      if (like.postId === this.props.postId && like.likerId === this.props.currentUser.id) id = like.id
    })
    this.props.removeLike(id)
    .then( () => this.setState({likedPost: false}))
  }

  countLikes() {
    let count = 0;
    this.props.likes.forEach( like => {
      if (like.postId === this.props.postId) count += 1
    })
    return count;
  }

  getLikeButton() {
    if (this.state.likedPost) {
      return window.likedButton
    } else if (this.state.likedPost === false) {
      return window.likeButton
    }
  }

  render() {
    if (this.state === null) return null;

    let addOrRemoveLike;
    if (this.state.likedPost === true) {
      addOrRemoveLike = this.removeLike
    } else if (this.state.likedPost === false) {
      addOrRemoveLike = this.addLike
    }

    console.log(this.state.likedPost)
    return (
      <div>
        {/* <div onClick={addOrRemoveLike}>{this.countLikes()} likes</div> */}
        <div onClick={addOrRemoveLike} className="like-button-container">
          <img src={this.getLikeButton()} className="like-button"/>
          <span className="like-word">Like</span>
        </div>
      </div>
    )
  }
}

export default LikesIndex