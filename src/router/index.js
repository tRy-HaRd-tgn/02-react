import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
export const routes =[ 
    {path: '/' , component: <About></About>, exact: true},
    {path: '/about' , component: <About></About>, exact: true},
    {path: '/posts' , component: <Posts></Posts>, exact: true},
    {path: '/posts/:id' , component: <PostIdPage></PostIdPage>, exact: true},
]