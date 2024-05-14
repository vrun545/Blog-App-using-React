import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../post-reducers/postHandler";
import { selectAllUsers } from "../post-reducers/categoryHandler";
import { useNavigate } from "react-router-dom";
import "./post.css";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);


  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      alert("Your Post has been Added Successfully !!!");
      setTitle("");
      setContent("");
      navigate("/");
    }
  };


  return (
    <section className="add-post-form">
      <h2>Add a New Post</h2>
      <form>
        <table className="form-table">
          <tbody>

            <tr>
              <td>
                <label htmlFor="postTitle">Title:</label>
              </td>
              <td>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="postAuthor">Category:</label>
              </td>

              <td>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                  <option value=""></option>
                  {usersOptions}
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="postContent">Content:</label>
              </td>
              <td>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />
              </td>
            </tr>

          </tbody>
        </table>

        <div className="button-container">
          <button type="button" onClick={onSavePostClicked} disabled={!canSave}> Save Post </button>
        </div>

      </form>
    </section>
  );
};

export default AddPostForm;