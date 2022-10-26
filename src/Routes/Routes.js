import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Categories from "../components/Categories";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Main from "../layout/Main";
import Private from "./Private";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:
            [
                {
                    path:'/home',
                    element:<Home></Home>,
                    // loader:()=> fetch('http://localhost:5000/courses')
                },
                {
                    path: '/categories',
                    element: <Categories></Categories>
                },
                {
                    path:'/category/:id',
                    element: <Private><Courses></Courses></Private>,
                    loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`)
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/profile',
                    element:<Private><Profile></Profile></Private>
                },
                {
                    path:'/faq',
                    element:<FAQ></FAQ>
                },
                { path: '*', element: <div><h2 className='mt-5'>404 Route Not Found</h2></div> }
            ]
    }
])