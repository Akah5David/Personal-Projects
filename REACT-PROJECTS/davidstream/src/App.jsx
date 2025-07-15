import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layouts/Root";
import MainPage from "./pages/Main";
import CategoryLoader from "./api/loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <MainPage />, loader: CategoryLoader },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
