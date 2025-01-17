import React from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/Mybutton";
import { useState } from "react";

function PostForm({create}) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
        type="text"
        placeholder="Название поста"
      ></MyInput>
      <MyInput
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
        type="text"
        placeholder="Описание поста"
      ></MyInput>
      <MyButton type="submit" onClick={addNewPost}>
        Создать пост
      </MyButton>
    </form>
  );
}
export default PostForm;
