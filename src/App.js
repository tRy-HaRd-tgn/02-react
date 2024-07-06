import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./UI/button/Mybutton";
import "./styles/App.css";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  return (
    <div className="App">
      <input type='text' placeholder="Название поста"></input>
      <input type="text" placeholder="Описание поста"></input>
      <MyButton>Создать пост</MyButton>
      <PostList posts={posts} title={"Список постов 1"}></PostList>
    </div>
  );
}

export default App;
