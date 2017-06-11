import React, { Component } from 'react';
import PostListItem from './post_list_item';
import PostsPagination from './posts_pagination';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: [], page: 1};
  }

  componentDidMount() {
    this.props.fetchPosts();
    console.log(this.props.posts);

  }


  render() {

    return (
      <div>
        {this.state.posts}
        <PostsPagination />
      </div>
    )
  }
}

function mapStateToProps(state) {
 return {posts: state.posts};
}
export default connect( mapStateToProps, {fetchPosts}) (PostsIndex);
