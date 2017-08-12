import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {

  componentDidMount() {
    let args = {
      page: 1,
      category: []
    }
    this.props.fetchPosts(args);
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

        </div>
      )
    }
  }
}

function mapStateToProps(state) {
 return {posts: state.posts, activePage: state.activePage, activeCategory: state.activeCategory };
}
export default connect( mapStateToProps, {fetchPosts}) (PostsIndex);
