import React from 'react';

const PostPaginationPage = (args) => {
  return (
    <li key={args.page}>
      <a href="#" onClick={args.click(4)}>{args.page}</a>
    </li>
  )
}

export default PostPaginationPage;
