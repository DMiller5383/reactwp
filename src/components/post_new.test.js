import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {shallow} from 'enzyme';
import {PostNew} from './post_new';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils'
import configureStore from 'redux-mock-store';
const mockStore=configureStore();

describe('PostNew', ()=>{
  let store, postNew, wrapper, categories;
  beforeEach(()=>{
    store=mockStore();
      let category1 = {id: 1, value: "Category1"};
      let category2 = {id: 2, value: "Category2"};
      let categories = [category1, category2];
      postNew = <PostNew handleSubmit={()=>{ return true}} categories={categories}/>
      wrapper = shallow(postNew);
  });

  it('has the right amount of form fields', ()=>{
    let children = wrapper.find('form').children();
    expect(children.length).toBe(4);
  });

  it('properly populates form categories', ()=> {
    let select = wrapper.find('.categories-dropdown');
    console.log(wrapper.find('.categories-dropdown').children());
  });
})
