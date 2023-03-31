import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";

const App = () => <RouterProvider router={router}></RouterProvider>;

export default App;
