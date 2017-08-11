import PostsIndex from './components/posts_index';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import PostsPagination from './components/posts_pagination';
import CategoriesList from './components/categories_list';
import React, { Component } from 'react';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App;
