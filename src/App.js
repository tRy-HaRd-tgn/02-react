import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import MySelect from "./UI/select/MySelect";
import PostForm from "./components/PostForm";
function App() {
  const [selectedSort, setSelectedSort] = useState("");
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
  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
  };
  return (
    <div className="App">
      <PostForm create={createNewPost}></PostForm>
      <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue="сортировка по"
        options={[
          {
            value: "title",
            name: "по названию",
          },
          {
            value: "body",
            name: "по описанию",
          },
        ]}
      ></MySelect>
      <PostList
        remove={removePost}
        posts={posts}
        title={"Посты про JS"}
      ></PostList>
    </div>
  );
}

export default App;
