import React, {Component} from 'react';
import {FormTextBox} from './form_text_box';
import {shallow, render, wrapper} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('form_text_box.js', ()=>{
  let field =  {
    input: {
      name: 'title'
    },
    meta: {
      touched: false,
      error: ''
    },
  }

  let fieldWithErrors = {
    input: {
      name: 'title'
    },
    meta: {
      touched: true,
      error: 'There was an error.'
    },
  }
  let textBox;
  let textBoxWithErrors;
  beforeEach(()=>{
    textBox = shallow(<FormTextBox input={field.input} meta={field.meta}  />);
    textBoxWithErrors = shallow(<FormTextBox input={fieldWithErrors.input} meta={fieldWithErrors.meta} />);
  })
  it('renders correctly', ()=>{
    expect(toJson(textBox)).toMatchSnapshot();
  });

  it('renders a textbox', ()=>{
    let textBoxCount = textBox.find('input').length;
    expect(textBoxCount).toBe(1);
  });

  it('will display errors if there are any', ()=>{
    let error = textBoxWithErrors.find('.error');
    expect(error.text()).toBe('There was an error.');
  });

  it('will not display errors if touched is false', ()=>{

  });
});
