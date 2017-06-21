import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions'

class PostSingle extends Component {
  componentDidMount() {
    let post = this.props.getPost();
    console.log(post);
  }

  render() {

    return (
      <div>
        <h3>This is the post content here</h3>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return { post: state.post };
}

export default connect(mapStateToProps, {getPost})(PostSingle);
