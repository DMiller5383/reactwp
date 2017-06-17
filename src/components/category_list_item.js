import React from 'react';

const CategoryListItem = (data, callback=null) => {
  return (
    <div key={data.id}>
      <a href={data.id}>{data.name}</a>
    </div>
  )
}


export default CategoryListItem;
