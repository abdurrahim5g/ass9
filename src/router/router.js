const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/blog", element: <h3>Blogs</h3> },
      { path: "/statistic", element: <h3>Statistic</h3> },
    ],
  },
]);

export default router;
