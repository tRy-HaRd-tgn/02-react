import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
export default function AppRouter(props) {
  return (
    <Routes>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/" element={<About></About>}></Route>
      <Route path="/posts" element={<Posts></Posts>}></Route>
      <Route path="/error" element={<Error></Error>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
  );
}
