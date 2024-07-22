import React from "react";
import MyButton from "../UI/button/Mybutton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate();
  let path ='/posts/' + props.post.id;
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => router(path)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
