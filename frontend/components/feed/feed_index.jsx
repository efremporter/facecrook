import React from 'react'

class FeedIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts();
    // console.log('here')
  }

  render() {
    // console.log('props', this.props)
    return (
      <h1>Welcome to your feed!</h1>
    )
  }
}

export default FeedIndex