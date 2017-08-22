import React, {Component} from 'react';
import {FormSelect} from './form_select';
import {shallow, render, wrapper} from 'enzyme';
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

  it('it renders option values correctly', ()=>{
    let option1 = wrapper.find('[value=1]').length;
    let option2 = wrapper.find('[value=2]').length;
    let option3 = wrapper.find('[value=3]').length;

    expect(option1 + option2 + option3).toBe(3);
  });

  it('it renders option values correctly', ()=>{
    let option1 = wrapper.find('[value=1]').text();
    expect(option1).toBe('title1');
  });


});
