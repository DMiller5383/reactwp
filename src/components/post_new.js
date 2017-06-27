import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { newPost } from '../actions/';

class PostNew extends Component {
  renderField(field) {

  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" type="text" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }


}

function validate(values) {
    return values;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { newPost }) (PostNew)
);
