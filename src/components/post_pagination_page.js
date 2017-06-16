import React from 'react';

const PostPaginationPage = (args) => {
  let className = 'pagination-page';
  if(args.page === args.activePage) {
    className = `${className} active`;
  }
  return (
    <li key={args.page} className={className}>
      <a href="{args.page}" onClick={args.click(args.page)}>{args.page}</a>
    </li>
  )
}

export default PostPaginationPage;
