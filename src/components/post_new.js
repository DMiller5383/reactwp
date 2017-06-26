import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
  renderField(field) {
    
  }

  class onSubmit(values) {
    const { handleSubmit } = this.props;
  }

  render() {

  }

  function validate(values) {

  }

}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost }) (PostNew)
);
