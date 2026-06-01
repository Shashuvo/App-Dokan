import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";
import ErrorPage from "../Pages/Error/ErrorPage";
import Installation from "../Pages/Installation/Installation";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 250));
          return fetch('/apps.json')
        },
        Component: Home,
        hydrateFallbackElement: <div>Loading...</div>
      },
      {
        path: "apps",
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 250));
          return fetch('/apps.json')
        },
        Component: Apps,
      },
      {
        path: "apps/:id",
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 250));
          return fetch('/apps.json')
        },
        Component: AppsDetails
      },
      {
        path: "installedApps",
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 250));
          return fetch('/apps.json')
        },
        Component: Installation
      }
    ]
  },
]);

export default router;