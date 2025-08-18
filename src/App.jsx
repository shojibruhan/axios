import React, { useEffect, useState } from "react";
import api from "./api/api";
import "./App.css";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Posts from "./components/Posts";
// import initialPosts from "./data/db.js";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const handleDeletePost = async (postId) => {
    if (confirm("Are you sure you want to Delete this Post?")) {
      try {
        const newPosts = posts.filter((post) => post.id !== postId);
        await api.delete(`/posts/${postId}`);
        setPosts(newPosts);
      } catch (err) {
        setError(err.message);
      }
    } else {
      console.log("You Choose not to Delete this Post!");
    }
  };

  const handleEditPost = async (updatedPost) => {
    try {
      const response = await api.patch(`/posts/${updatedPost.id}`, updatedPost);
      const updatedPosts = posts.map((post) =>
        post.id === response.data.id ? response.data : post
      );
      setPosts(updatedPosts);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddPost = async (newPost) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
      const finalPost = {
        id: id.toString(),
        ...newPost,
      };
      const response = await api.post("/posts", finalPost);
      // console.log(response.data);
      setPosts([...posts, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        <h1>API Request with api</h1>
        <hr />
        <div>
          <Posts
            posts={posts}
            onDeletePost={handleDeletePost}
            onEditPost={setPost}
          />
          <hr />
          {!post ? (
            <AddPost onAddPost={handleAddPost} />
          ) : (
            <EditPost post={post} onEditPost={handleEditPost} />
          )}
          <hr />

          {error && (
            <>
              <div className="error">{error}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
