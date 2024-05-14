import React from "react";
import PostsList from "./Redux/post-actions/PostsList";
import AddPostForm from "./Redux/post-actions/PostAdded";
import Layout from './UI-Components/Navbar';
import { Routes, Route } from "react-router-dom";
import SinglePostPage from "./Redux/post-actions/PostSelected";
import EditPostForm from "./Redux/post-actions/PostUpdate";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<PostsList />} />
        <Route path="/add-post" element={<AddPostForm />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route
            path="edit/:postId"
            element={
              <EditPostForm />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
