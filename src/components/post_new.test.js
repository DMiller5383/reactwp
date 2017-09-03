import React, {Component} from 'react';
//import {reduxForm} from 'redux-form';
import {shallow, mount} from 'enzyme';
import {PostNew} from './post_new';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils'
import configureStore from 'redux-mock-store';
import { Field, reduxForm } from 'redux-form';
import {FormTextBox} from './form_text_box';
import {FormTextArea} from './form_text_area';
import {FormSelect} from './form_select';

const mockStore=configureStore();

   let store, wrapper, handleSubmit, promiseReturnedFromFormHandler, fields;
describe('PostNew', ()=>{
   beforeEach(()=>{
     store=mockStore();
     fields = [
       {
         key: 'title',
         label: 'Title',
         name: 'title',
         component: FormTextBox,
         value: 'asdf',
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

     ];


     handleSubmit = jest.fn();
   });

   it('renders a form', ()=>{
     wrapper = shallow(<PostNew handleSubmit={handleSubmit} fields={fields}/>);
     let form= wrapper.find('form');
     expect(form.length).toBe(1);
   });

   it('expect handleSubmit to have been called', ()=>{
     let newPost = (values) =>{
       return true;
     }

     wrapper = shallow(<PostNew handleSubmit={handleSubmit} fields={fields} newPost={newPost}/>);
     wrapper.find('form').simulate('submit');
     expect(handleSubmit).toHaveBeenCalled();
   });


   it('expect newPost action creator to have been called', ()=>{
     let newPost = jest.fn();
     let handleSubmitFn = fn => {
					return function() {
						promiseReturnedFromFormHandler = fn(arguments)
					}
			}
     wrapper = shallow(<PostNew handleSubmit={handleSubmitFn} fields={fields} newPost={newPost}/>);
     wrapper.find('form').simulate('submit');
     expect(newPost).toHaveBeenCalled();
   });

})
