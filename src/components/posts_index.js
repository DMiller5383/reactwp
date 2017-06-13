import React, { Component } from 'react';
import PostListItem from './post_list_item';
import PostsPagination from './posts_pagination';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let a = this.props.fetchPosts();
  }


  render() {
    console.log(this.props.posts);
    return (
      <div>
        {this.props.posts}
        <PostsPagination />
      </div>
    )
  }
}

function mapStateToProps(state) {
 return {posts: state.posts};
}
export default connect( mapStateToProps, {fetchPosts}) (PostsIndex);
