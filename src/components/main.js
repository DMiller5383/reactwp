import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PostsIndex from './posts_index';
import PostSingle from './post_single';
import PostNew from './post_new';
import {FormTextBox} from './form_text_box';
import {FormTextArea} from './form_text_area';
import {FormSelect} from './form_select';

const Main = () => {
  let fields = [
    {
      key: 'title',
      label: 'Title',
      name: 'title',
      component: FormTextBox,
      value: 'asdf'
    },
    {
      key: 'content',
      label: 'Content',
      name: 'content',
      component: FormTextArea
    },
    {
      key: 'categories',
      label: 'Categories',
      name: 'categories',
      className: 'categories-dropdown',
      component: FormSelect

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
