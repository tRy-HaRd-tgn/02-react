import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import "../styles/App.css";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../UI/Modal/Modal";
import MyButton from "../UI/button/Mybutton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import { Pagination } from "../UI/pagination/pagination";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState("false");
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let pagesArray = getPagesArray(totalPages);

  const changePage = (page) => {
    setPage(page);
  };

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
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
  }, [page]);
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
      <Pagination
        pagesArray={pagesArray}
        page={page}
        changePage={changePage}
      ></Pagination>
    </div>
  );
}

export default Posts;
