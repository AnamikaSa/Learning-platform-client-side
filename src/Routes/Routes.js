import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Categories from "../components/Categories";
import Courses from "../components/Courses";
import Home from "../components/Home";
import Main from "../layout/Main";

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
                    element: <Courses></Courses>,
                    loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`)
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                },
                { path: '*', element: <div><h2 className='mt-5'>404 Route Not Found</h2></div> }
            ]
    }
])