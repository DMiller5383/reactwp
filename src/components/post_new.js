import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { newPost } from '../actions';
import {FormSelect} from './form_select';
import {FormTextBox} from './form_text_box';
import {FormTextArea} from './form_text_area';
import _ from 'lodash';

export class PostNew extends Component {

  onSubmit(values) {
  }

  render() {
    const { handleSubmit } = this.props;
    let fields = this.props.fields.map((field)=>{
      return <Field key={field.key} label={field.label} name={field.name} component={field.component} value={field.value} />;
    });
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {fields}
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
