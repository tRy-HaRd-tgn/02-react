import MyInput from "../UI/input/MyInput";

export default function Login(props) {
  return (
    <div>
      <h1>Страница для логина</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин"></MyInput>
        <MyInput type="password" placeholder="Введите пароль"></MyInput>
      </form>
    </div>
  );
}
