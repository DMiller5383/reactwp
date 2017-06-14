import React from 'react';

const PostPaginationPage = (args) => {
  return (
    <li key={args.page}>
      <a href="#" onClick={args.click(args.page)}>{args.page}</a>
    </li>
  )
}

export default PostPaginationPage;
