import BlogPage from "../components/Pages/BlogPage/BlogPage";
import QuizSinglePage from "../components/Pages/QuizSinglePage/QuizSinglePage";
import SingleBlogPage from "../components/Pages/SingleBlogPage/SingleBlogPage";
import Statistic from "../components/Pages/Statistic/Statistic";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../layout/Main/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/quiz/:quizId",
        element: <QuizSinglePage></QuizSinglePage>,
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
      },
      { path: "/blog", element: <BlogPage></BlogPage> },
      { path: "/blog/:blogId", element: <SingleBlogPage></SingleBlogPage> },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
    ],
  },
]);

export default router;
