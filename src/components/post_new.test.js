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
   let store, wrapper;
   beforeEach(()=>{
     store=mockStore();

     const handleSubmit = function(click) {
       click()
     }

     wrapper = shallow(<PostNew handleSubmit={handleSubmit}/>);
   });

   it('does something', ()=>{
     wrapper.find('button').simulate('click');
   });

})
