import React, {Component} from 'react';
import {FormTextArea} from './form_text_area';
import {shallow, render, wrapper} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('form_text_Area.js', ()=>{
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

  let fieldErrorsUntouched = {
    input: {
      name: 'title'
    },
    meta: {
      touched: false,
      error: 'There was an error.'
    },
  }
  let textArea;
  let textAreaWithErrors;
  let textAreaUntouched;
  beforeEach(()=>{
    textArea = shallow(<FormTextArea input={field.input} meta={field.meta}  />);
    textAreaWithErrors = shallow(<FormTextArea input={fieldWithErrors.input} meta={fieldWithErrors.meta} />);
    textAreaUntouched = shallow(<FormTextArea input={fieldErrorsUntouched.input} meta={fieldErrorsUntouched.meta} />);

  })
  it('renders correctly', ()=>{
    expect(toJson(textArea)).toMatchSnapshot();
  });

  it('renders a textArea', ()=>{
    let textAreaCount = textArea.find('textarea').length;
    expect(textAreaCount).toBe(1);
  });

  it('will display errors if there are any', ()=>{
    let error = textAreaWithErrors.find('.error');
    expect(error.text()).toBe('There was an error.');
  });

  it('will not display errors if touched is false', ()=>{
    let error = textAreaUntouched.find('.error');
    expect(error.length).toBe(0);
  });
});
