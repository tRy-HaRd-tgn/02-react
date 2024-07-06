import React, { useState } from "react";

import PostList from "./components/PostList";
import MyButton from "./UI/button/Mybutton";
import "./styles/App.css";
import MyInput from "./UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addNewPost = (e) => {
    console.log(title);
    console.log(description);
  };
  return (
    <div className="App">
      <MyInput
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Название поста"
      ></MyInput>
      <MyInput
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="Описание поста"
      ></MyInput>
      <MyButton type="submit" onClick={addNewPost}>
        Создать пост
      </MyButton>
      <PostList posts={posts} title={"Посты про JS"}></PostList>
    </div>
  );
}

export default App;
