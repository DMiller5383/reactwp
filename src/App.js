import PostsIndex from './components/posts_index';
import PostsPagination from './components/posts_pagination';

import React, { Component } from 'react';
import WPAPI from 'wpapi';
import './App.css';

class App extends Component {
  render() {
    const wp = new WPAPI({endpoint: 'http://reactwp.loc/wp-json'});
    const posts = [];
    return (
      <div>
        <PostsIndex wp={wp} posts={posts}/>
      </div>
    );
  }
}

export default App;
