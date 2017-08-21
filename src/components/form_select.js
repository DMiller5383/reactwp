import React, {Component} from 'react';
import _ from 'lodash';

export const FormSelect = (field) => {
  let options = [];
  if( typeof field.options !== 'undefined') {
    options = field.options;
  }

  let selectOptions = options.map((option)=>{
    return(<option key={option.id} value={option.id}>option.title</option>);
  })

  return (
    <div className="input-row">
      <select className={field.className}>{selectOptions}</select>
    </div>
  )
}
