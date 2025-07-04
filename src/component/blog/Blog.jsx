import { useState } from "react";
import styles from "../blog/blog.module.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Please fill all fields");

    if (editingIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editingIndex] = { title, content };
      setPosts(updatedPosts);
      setEditingIndex(null);
    } else {
      setPosts([...posts, { title, content }]);
    }
    setTitle("");
    setContent("");
  };

  const handleEditPost = (index) => {
    const post = posts[index];
    setTitle(post.title);
    setContent(post.content);
    setEditingIndex(index);
  };

  const handleDeletePost = (index) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter((_, i) => i !== index);
      setPosts(updatedPosts);
    }
  };

  return (
    <div className={styles.blogContainer}>
      <h2>📝 Simple Blog App</h2>
      <form onSubmit={handleAddPost} className={styles.form}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">
          {editingIndex !== null ? "Update" : "Add Post"}
        </button>
      </form>

      <div className={styles.posts}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className={styles.actions}>
              <button onClick={() => handleEditPost(index)}>Edit</button>
              <button
                className={styles.delete}
                onClick={() => handleDeletePost(index)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
