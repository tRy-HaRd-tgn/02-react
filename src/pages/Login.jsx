import MyButton from "../UI/button/Mybutton";
import MyInput from "../UI/input/MyInput";
import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const router = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const submit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    router("/");
    localStorage.setItem('auth','true')
  };
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={submit}>
        <MyInput type="text" placeholder="Введите логин"></MyInput>
        <MyInput type="password" placeholder="Введите пароль"></MyInput>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}
