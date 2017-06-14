import React, { Component } from 'react';
import PostListItem from './post_list_item';
import PostsPagination from './posts_pagination';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.fetchPosts();
  }


  render() {
    if(_.isEmpty(this.props.posts)) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          {this.props.posts}
          <PostsPagination />
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
 return {posts: state.posts, pages: state.pages };
}
export default connect( mapStateToProps, {fetchPosts}) (PostsIndex);
