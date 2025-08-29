import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layouts/Root";
import MainPage from "./pages/Main";
import ComponentLoaders from "./api/loader";

import SubscribePage from "./pages/SubscribePage";
import DocumentariesPage from "./pages/DocumentariesPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import FooterPage from "./pages/FooterPage";
import CategoriesPage from "./pages/CategoryPage";
import PremiumSubscribePage from "./pages/PremiumSub";
import ViewVideoPage from "./pages/ViewVideoPage";

// import { QuestionLoader } from "./api/loader";

function App() {
  const { CategoryLoader, RootLoader } = ComponentLoaders;
  console.log("ComponentLoaders ", ComponentLoaders);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: RootLoader,
      children: [{ index: true, element: <MainPage /> }],
    },
    { path: "/category", element: <CategoriesPage />, loader: CategoryLoader },
    {
      path: "/documentaries",
      element: <DocumentariesPage />,
    },

    { path: "pages", element: <FooterPage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/logout", element: <LogoutPage /> },
    {
      path: "/subscribe",
      element: <SubscribePage />,
      loader: RootLoader,
    },
    {
      path: "/subscribe/premium",
      element: <PremiumSubscribePage />,
      loader: RootLoader,
    },
    {
      path: "/popular/:name",
      element: <ViewVideoPage />,
      loader: RootLoader,
    },
    {
      path: "/latest/:name",
      element: <ViewVideoPage />,
      loader: RootLoader,
    },
    {
      path: "/category/:name",
      element: <ViewVideoPage />,
      loader: RootLoader,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
