import PostsIndex from './components/posts_index';
import PostsPagination from './components/posts_pagination';
import CategoriesList from './components/categories_list';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const posts = [];
    return (
      <div>
        <PostsIndex posts={posts}/>
        <CategoriesList />
        <PostsPagination />
      </div>
    );
  }
}

export default App;
