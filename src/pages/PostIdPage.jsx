import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/Loader/Loader";
export default function PostIdPage(props) {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PostService.getById(params.id);
    setPost(responce.data);
  });
  const [fetchComments, isComLoading, comerror] = useFetching(async () => {
    const responce = await PostService.getCommentsByPostId(params.id);
    setComments(responce.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1>Вы открыли страницу поста с id = {params.id}</h1>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {post.id}, {post.title}
        </div>
      )}
      {isComLoading ? (
        <Loader style={{ marginTop: "50px" }}></Loader>
      ) : (
        <div>
          {comments.map((comm) => (
            <div style={{ marginTop: "15px" }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
