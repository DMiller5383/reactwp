import React from 'react';

const PostListItem = (post) => {
  return (
    <div key={post.id}>
      <a href={post.link}>{post.title}</a>
      <p>{post.excerpt}</p>
    </div>
  );
}

export default PostListItem;
