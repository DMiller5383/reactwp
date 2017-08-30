import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PostsIndex from './posts_index';
import PostSingle from './post_single';
import PostNew from './post_new';
import {FormTextBox} from './form_text_box';

const Main = () => {
  let fields = [
    {
      label: 'Title',
      name: 'title',
      component: FormTextBox
    }
  ]


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/posts/new' component={()=>(<PostNew fields={fields}/>)} />
        <Route path='/posts/:slug' component={PostSingle} />
        <Route path='/' component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default Main;
