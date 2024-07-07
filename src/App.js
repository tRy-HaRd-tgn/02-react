import React, { useRef, useState } from "react";

import PostList from "./components/PostList";
import MyButton from "./UI/button/Mybutton";
import "./styles/App.css";
import MyInput from "./UI/input/MyInput";
import PostForm from "./components/PostForm";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div className="App">
      <PostForm create={createNewPost}></PostForm>
      <PostList
        remove={removePost}
        posts={posts}
        title={"Посты про JS"}
      ></PostList>
    </div>
  );
}

export default App;
