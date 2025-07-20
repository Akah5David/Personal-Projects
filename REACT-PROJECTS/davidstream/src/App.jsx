import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layouts/Root";
import MainPage from "./pages/Main";
import ComponentLoaders from "./api/loader";

function App() {
  const { CategoryLoader, RootLoader } = ComponentLoaders;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: RootLoader,
      children: [
        { path: "category", element: <MainPage />, loader: CategoryLoader },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
