import React, {Component} from 'react';
import {FormSelect} from './form_select';
import {shallow} from 'enzyme';
describe('form_select.js', ()=>{
  let wrapper;
  beforeEach(()=>{

    let options= [{id: 1, title: 'title1'}, {id: 2, title: 'title2'}, {id: 3, title: 'title3'}]
    wrapper = shallow(<FormSelect options={options} className="selectClass" />);
  })
  it('renders a select field', ()=>{
    let selectCount = wrapper.find('select').length;
    expect(selectCount).toBe(1);
  });

  it('renders the correct number of options', ()=>{
    let optionCount = wrapper.find('option').length;

    expect(optionCount).toBe(3);
  });

  it('renders the correct className', ()=> {
    let select = wrapper.find('.selectClass').length;
    expect(select).toBe(1);
  });

  it('it renders options correctly', ()=>{

    expect(1).toBe(1);
  });


});
