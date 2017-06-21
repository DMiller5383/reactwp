import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PostsIndex from './posts_index';
import PostSingle from './post_single';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/posts/:slug' component={PostSingle} />
        <Route path='/' component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default Main;
