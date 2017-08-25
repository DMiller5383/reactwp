import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { newPost } from '../actions';
import {FormSelect} from './form_select';
import {FormTextBox} from './form_text_box';
import {FormTextArea} from './form_text_area';
import _ from 'lodash';

export class PostNew extends Component {

  constructor(props) {
    super(props);
  }

  onSubmit(values) {
    console.log(values);
  }

  renderTextArea(field) {
    return(
      <div className="input-row">
        <textarea {...field.input}></textarea>
        {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={FormTextBox} />
          <Field label="Content" name="content" component={FormTextArea} />
          <Field label="Categories" name="categories" className="categories-dropdown" component={FormSelect} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
    let errors = {};
    if(_.isEmpty(values.title)) {
      errors.title = 'A title is required.'
    }

    if(_.isEmpty(values.content)) {
      errors.content = 'Please enter some content';
    }
    //console.log(errors);
    return errors;
}


function mapStateToProps(state) {
  return {categories: state.categories};
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { newPost }) (PostNew)
);
