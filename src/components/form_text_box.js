import React from 'react';

export const FormTextBox  = (field)=> {
  console.log(field);
  return(
    <div className="input-row">
      <input {...field.input} type="text" />
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  )
}
