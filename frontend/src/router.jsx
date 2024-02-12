import {createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import Irrigation from "./Irrigation";
import NavBar from './NavBar';

const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/irrigation',
                element: <Irrigation />
            }
        ]
    }
])

export default router;