import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {body: "", photo: null}
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

  render() {
    if (!this.props.modal) {
      return (
        <form>
          <input type="text" placeholder="What's on your mind?" onClick={this.props.openModal}/>
        </form>
      )
    } else {
      return <div>hihihihih</div>
    }
  }

}
//value={this.state.body} onChange={this.handleChange('body').bind(this)}
export default PostForm;