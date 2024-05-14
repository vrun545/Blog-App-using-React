import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from '../post-reducers/postHandler';
import './post.css'; 

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionEmoji = {
    thumbsUp: '👍'
  };

  const reactionButtons = Object.keys(reactionEmoji).map((emoji) => (
    <button key={emoji} onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: emoji }))}
      className="reaction-button"
    > {reactionEmoji[emoji]} {post.reactions[emoji]} 
    </button>
  ));

  return <div className="reaction-buttons">{reactionButtons}</div>;
};

export default ReactionButtons;
