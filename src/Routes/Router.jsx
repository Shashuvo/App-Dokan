import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children : [
        {
            index: true,
            path: "/",
            loader: async () => {
                    await new Promise(resolve => setTimeout(resolve, 250));
                    return fetch('/apps.json')
                },
            Component: Home,
        },
      ]
    },
  ]);

  export default router;