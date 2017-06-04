import PostsIndex from './components/posts_index';

import React, { Component } from 'react';
import WPAPI from 'wpapi';
import './App.css';

class App extends Component {
  render() {
    const wp = new WPAPI({endpoint: 'http://reactwp.loc/wp-json'});
    return (
      <div>Hello
        <PostsIndex wp={wp} />
      </div>
    );
  }
}

export default App;
