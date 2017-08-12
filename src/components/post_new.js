import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { newPost } from '../actions';
import _ from 'lodash';

export class PostNew extends Component {
  renderField(field) {

  }

  onSubmit(values) {
    //this.props.newPost(values);
    console.log(values);
  }

  renderInput(field) {
    return(
      <div className="input-row">
        <input {...field.input} type="text"/>
        {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
      </div>
    )
  }

  renderTextArea(field) {

    return(
      <div className="input-row">
        <textarea {...field.input}></textarea>
        {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
      </div>
    )
  }

  renderSelect(field) {
    let option = <option value="test">Test</option>
    return (
      <div className="input-row">
        <select>{option}</select>
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderInput} />
          <Field label="Content" name="content" component={this.renderTextArea} />
          <Field label="Categories" name="categories" className="categories-dropdown" component={this.renderSelect} />
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

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { newPost }) (PostNew)
);
