import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PostsIndex from './posts_index';
import PostSingle from './post_single';
import PostNew from './post_new';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/posts/new' component={PostNew} />
        <Route path='/posts/:slug' component={PostSingle} />
        <Route path='/' component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default Main;
