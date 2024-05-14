import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById, postDeleted } from "../post-reducers/postHandler";
import PostAuthor from "./PostCategory";
import ReactionButtons from "./PostReaction";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import EditPostForm from "./PostUpdate";
import "./post.css"; 

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(postDeleted(post.id));
      navigate("/");
    }
  };

  if (!post) {
    return (
      <section className="single-post-page not-found">
        <h2>Post not found</h2>
      </section>
    );
  }

  return (
    <div className="single-post-container">
      <h2 className="page-title">Your Post</h2>
      <article className="post-content">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-text">{post.content}</p>
        <div className="post-details">
          <PostAuthor userId={post.userId} />
        </div>
        <ReactionButtons post={post} />
      </article>
      <div className="post-actions">
        <Link
          to={`/post/edit/${post.id}`}
          className="action-button edit-button"
          state={{ post }}
        >
          Edit Post
        </Link>
        <button onClick={handleDelete} className="action-button delete-button">
          Delete Post
        </button>
      </div>
      {location.state && location.state.post && (
        <EditPostForm post={location.state.post} />
      )}
    </div>
  );
};

export default SinglePostPage;