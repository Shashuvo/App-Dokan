import { createBrowserRouter } from "react-router";
import Root from "../Components/Pages/Root";
import Home from "../Components/Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children : [
        {
            index: true,
            path: "/",
            Component: Home,
        },
      ]
    },
  ]);

  export default router;