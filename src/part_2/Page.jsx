import React, { useState } from "react";
// import initialPosts from "../data/db";
import { getAllPosts } from "../data/db";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Posts from "./components/Posts";

const initialPosts = getAllPosts();

const Page = () => {
  const [posts, setPosts] = useState(initialPosts);
  //   const [post, setPost] = useState(getSinglePost(1));
  const [post, setPost] = useState(null);

  const handleAddPost = (newPost) => {
    console.log(newPost);
    const finalPost = {
      id: posts.length + 1,
      ...newPost,
    };
    setPosts([...posts, finalPost]);
    // setPost(newPost);
  };

  const handleEditPost = (editPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === editPost.id ? editPost : post
    );
    setPosts(updatedPosts);
  };
  const handleDeletePost = (id) => {
    const filterdPost = posts.filter((post) => post.id !== id);
    setPosts([...filterdPost]);
  };
  //   const post = {
  //     id: 1,
  //     title: "Test",
  //     body: "Test Body",
  //   };
  return (
    <div>
      <h1>API Request with api</h1>
      <hr />
      {posts.length > 0 ? (
        <Posts
          posts={posts}
          onEditPost={setPost}
          onDeletePost={handleDeletePost}
        />
      ) : (
        <h1>
          <i>No Post Available!</i>
        </h1>
      )}

      <hr />

      {!post ? (
        <AddPost onAddPost={handleAddPost} />
      ) : (
        <EditPost post={post} onEditPost={handleEditPost} />
      )}
    </div>
  );
};

export default Page;
