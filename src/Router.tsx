import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
    {
        path: "*",
        element: <h1> 404 Not Found</h1>,
    },
]);

export default router;
