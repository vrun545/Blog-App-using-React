import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postUpdated, selectPostById } from '../post-reducers/postHandler';
import './post.css'; 
import { selectAllUsers } from '../post-reducers/categoryHandler';

const EditPostForm = () => {

  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, postId));
  const users = useSelector(selectAllUsers);

  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    userId: post?.userId || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSavePostClicked = () => {
    if (!formData.title || !formData.content || !formData.userId) {
      return;
    }

    dispatch(postUpdated({ id: post.id, ...formData }));

    setFormData({ title: '', content: '', userId: '' });
    navigate(`/post/${postId}`);
  };

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        content: post.content,
        userId: post.userId,
      });
    }
  }, [post]);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="edit-post-form-container">
      <h2 className="form-title">Edit Post</h2>
    
      <form>
        <div className="form-group">
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            id="postTitle"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="postAuthor">Category</label>
          <select id="postAuthor" name="userId" value={formData.userId} onChange={handleInputChange} >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="postContent">Content</label>
          <textarea id="postContent" name="content" value={formData.content} onChange={handleInputChange}/>
        </div>

        <button type="button" onClick={onSavePostClicked} className="save-button"
          disabled={!formData.title || !formData.content || !formData.userId} >
          Save Post
        </button>

      </form>
    </section>
  );
};

export default EditPostForm;