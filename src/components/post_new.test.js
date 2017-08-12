import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {shallow} from 'enzyme';
import {PostNew} from './post_new';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils'
import configureStore from 'redux-mock-store';
const mockStore=configureStore();

describe('PostNew', ()=>{
  let store, postNew, wrapper;
  beforeEach(()=>{
    store=mockStore();
      postNew = <PostNew handleSubmit={()=>{console.log('asdf')}}/>
      wrapper = shallow(postNew);
  });

  it('does something', ()=>{


    console.log(wrapper.find('form').length);
    //console.log(postNew);
    //console.log(postNew.dive());
    expect(5).toBe(5);

  });
})
