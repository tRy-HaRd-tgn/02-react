import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./UI/Modal/Modal";
import MyButton from "./UI/button/Mybutton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState("false");
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(true);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="App">
      <button> get posts</button>
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
      {postError && <h1>произошла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader></Loader>
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Посты про JS"}
        ></PostList>
      )}
    </div>
  );
}

export default App;
