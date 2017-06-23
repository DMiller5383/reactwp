import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions'

class PostSingle extends Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    let post = this.props.post[0];
    console.log(post);
    if(post == null) {
      return (<div>'Loading Post...'</div>);
    } else {

      return (

        <div>
          <h2>{post.title.rendered}</h2>
          <p>{post.content.rendered}</p>
        </div>
      )
    }


  }
}

function mapStateToProps(state) {
  return { post: state.post };
}

export default connect(mapStateToProps, {getPost})(PostSingle);
