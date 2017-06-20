import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PostsIndex from './posts_index';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default Main;
