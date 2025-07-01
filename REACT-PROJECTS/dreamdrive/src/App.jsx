import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./components/Root";
import HomePage from "./components/Index";
import FormPage from "./components/FormPage";
import ErrorPage from "./components/ErrorPage";
import UserDetailsPage from "./components/UserDetailPage";
import EditPage from "./components/EditPage";
import DeleteErrorPage from "./components/DeleteErrorPage";
import SideBarPage from "./components/SideBar";
import {
  formAction,
  deleteUsersAction,
  editformAction,
  updateFavoriteAction,
} from "./util/action";
import {
  usersDataLoader,
  useDetailsLoader,
  searchActionLoader,
} from "./util/loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />, // Layout with sidebar and main area
      children: [
        {
          path: "", // Sidebar route
          element: <SideBarPage />,
          loader: searchActionLoader, // Uses ?q= for filtering
        },
        {
          path: "new-user",
          element: <FormPage />,
          action: formAction,
        },
        {
          path: ":id",
          element: <UserDetailsPage />,
          loader: useDetailsLoader,
          children: [
            { path: "edit", element: <EditPage />, action: editformAction },
            { path: "delete", action: deleteUsersAction },
            { path: "favorite", action: updateFavoriteAction },
          ],
        },
        {
          index: true,
          element: <HomePage />,
          loader: usersDataLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
