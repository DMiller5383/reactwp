import React, {Component} from 'react';
import _ from 'lodash';


export const FormTextArea  = (field)=> {

  return(

    <div className="input-row">
      <textarea {...field.input}></textarea>
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>

  )
}
