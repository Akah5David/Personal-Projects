import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./components/Root";
import HomePage from "./components/Index";
import FormPage from "./components/FormPage";
import ErrorPage from "./components/ErrorPage";
import UserDetailsPage from "./components/UserDetailPage";
import EditPage from "./components/EditPage";
import DeleteErrorPage from "./components/DeleteErrorPage";

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
      element: <RootPage />, // Root layout (if needed)
      errorElement: <ErrorPage />,
      loader: usersDataLoader,
      children: [
        {
          id: "sidebar",
          path: "",
          loader: searchActionLoader,
        },
        {
          id: "homepage",
          index: true,
          element: <HomePage />,
          loader: usersDataLoader,
        },
        {
          id: "new-user",
          path: "new-user",
          element: <FormPage />,
          action: formAction,
        },
        {
          path: ":id",
          element: <UserDetailsPage />,
          loader: useDetailsLoader,
        },
        {
          path: ":id/edit",
          element: <EditPage />,
          action: editformAction,
          loader: useDetailsLoader,
        },
        {
          path: ":id/delete",
          action: deleteUsersAction,
          errorElement: <DeleteErrorPage />,
        },
        {
          path: ":id/favorite",
          action: updateFavoriteAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
