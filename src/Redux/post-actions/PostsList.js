import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../post-reducers/postHandler";
import PostAuthor from "./PostCategory";
import ReactionButtons from "./PostReaction";
import { useNavigate } from "react-router-dom";
import "./post.css";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <section className="posts-list-container">
      <h2 className="list-title">All Recent Posts</h2>
      {posts.map((post) => (
        <article key={post.id} className="post-item">
          <h3 className="post-title">{post.title}</h3>
          {post.content && <p className="post-content">{post.content}</p>}
          <div className="post-info">
            <PostAuthor userId={post.userId} />
            <ReactionButtons post={post} />
          </div>
          <div className="show-full-post">
            <button onClick={() => handlePostClick(post.id)}>
              Show Full Post
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default PostsList;
