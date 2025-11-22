import React, { useState } from "react";

const EditPost = ({ post, onEditPost }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: post.id,
      title,
      body,
    };
    onEditPost(updatedPost);
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <h2>Edit post</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
