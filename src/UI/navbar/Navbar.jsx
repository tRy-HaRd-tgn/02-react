import { Link } from "react-router-dom";
import MyButton from "../button/Mybutton";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
export default function Navbar(props) {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    router("/login");
    localStorage.removeItem('auth');
  };

  const router = useNavigate();
  return (
    <div className="navbar">
      <MyButton style={{ marginLeft: "25px" }} onClick={logout}>
        Выйти
      </MyButton>
      <div className="navbar__links">
        <Link to="/about">о сайте</Link>
        <br></br>
        <Link to="/posts">посты</Link>
      </div>
    </div>
  );
}
