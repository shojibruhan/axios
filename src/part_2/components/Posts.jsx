import React from "react";
const Posts = ({ posts, onEditPost, onDeletePost }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.id}</span>
            <span>{post.title}</span>
            <button onClick={() => onDeletePost(post.id)}>❌</button>
            <button onClick={() => onEditPost(post)}>✏️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
