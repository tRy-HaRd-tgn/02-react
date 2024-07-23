import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
export const privateRoutes =[ 
    {path: '/' , component: <Posts></Posts>, exact: true},
    {path: '/about' , component: <About></About>, exact: true},
    {path: '/posts' , component: <Posts></Posts>, exact: true},
    {path: '/posts/:id' , component: <PostIdPage></PostIdPage>, exact: true},
]

export const publicRoutes =[ 
    {path: '/login' , component: <Login></Login>, exact: true},
    {path: '/' , component: <Login></Login>, exact: true},
]