import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import PostDetailPage from "./pages/postDetail/PostDetailPage";
import HomePage from "./pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/detail/:postID", element: <PostDetailPage /> }
    ]
  }
]);

export default router;
