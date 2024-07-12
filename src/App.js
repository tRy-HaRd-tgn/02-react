import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./UI/MyModal.jsx/Modal";
import MyButton from "./UI/button/Mybutton";
import { usePosts } from "./hooks/usePosts";
function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(true);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState("false");
  return (
    <div className="App">
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createNewPost}></PostForm>
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <MyButton
        onClick={() => {
          modal ? setModal(false) : setModal(true);
        }}
      >
        Добавить пост
      </MyButton>
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Посты про JS"}
      ></PostList>
    </div>
  );
}

export default App;
