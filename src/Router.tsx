import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Markdown from "./pages/Markdown";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/markdown",
                element: <Markdown />,
            },
        ],
    },
    {
        path: "*",
        element: <h1> 404 Not Found</h1>,
    },
]);

export default router;
