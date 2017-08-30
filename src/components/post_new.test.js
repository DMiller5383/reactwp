import React, {Component} from 'react';
//import {reduxForm} from 'redux-form';
import {shallow, mount} from 'enzyme';
import {PostNew} from './post_new';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils'
import configureStore from 'redux-mock-store';
import { Field, reduxForm } from 'redux-form';

const mockStore=configureStore();

describe('PostNew', ()=>{
   let store, wrapper, handleSubmit;
   beforeEach(()=>{
     store=mockStore();

      handleSubmit = fn => fn;

     wrapper = shallow(<PostNew handleSubmit={handleSubmit}/>);
   });

   it('does something', ()=>{
     let input = wrapper.find('input');
     console.log(input.length);
     wrapper.find('form').simulate('submit');

   });

})
