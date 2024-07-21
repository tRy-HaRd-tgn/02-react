import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div  className="navbar">
      <div className="navbar__links">
        <Link to="/about">о сайте</Link>
        <br></br>
        <Link to="/posts">посты</Link>
      </div>
    </div>
  );
}
