import { createBrowserRouter } from "react-router-dom";
import HeaderWithBackground from "../components/HeaderWithBackground";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:
            [
                {
                    path: '/headerwithbackground',
                    element: <HeaderWithBackground></HeaderWithBackground>
                }
            ]
    }
])