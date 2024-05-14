import React from 'react';
import { useDispatch } from 'react-redux';
import { postDeleted } from './postActions';
import { useNavigate } from 'react-router-dom';
import './post.css';

const handleDelete = () => {
  if (window.confirm('Confirm again to delete the post?')) {
    dispatch(postDeleted(postId));
    navigate('/');
  }
};

const DeletePostButton = ({ postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  return (
    <div className="delete-post-container">
      <button onClick={handleDelete} className="delete-button"> Delete </button>
    </div>
  );
};

export default DeletePostButton;
