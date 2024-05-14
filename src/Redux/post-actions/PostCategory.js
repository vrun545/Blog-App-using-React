import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../post-reducers/categoryHandler';
import './post.css'; 

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return (
    <div className="post-author">
      <span className="author-label">Author:</span>
      <span className="author-name">
        {author ? author.name : 'Educational'}
      </span>
    </div>
  );
};

export default PostAuthor;
