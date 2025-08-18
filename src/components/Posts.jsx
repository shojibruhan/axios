import React from "react";

const Posts = ({ posts, onDeletePost, onEditPost }) => {
  return (
    <div>
      <h2>Posts</h2>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <span>{post.id}</span>
              <span>{post.title}</span>
              <div>
                <span onClick={() => onDeletePost(post.id)}>❌</span>
                <span onClick={() => onEditPost(post)}>✏️</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
