import React, { useRef, useMemo, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./UI/MyModal.jsx/Modal";
import MyButton from "./UI/button/Mybutton";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(true)
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);
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
