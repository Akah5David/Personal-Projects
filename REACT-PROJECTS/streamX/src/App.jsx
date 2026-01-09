import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import MainPage from "./pages/Main";
import ComponentLoaders from "./api/loader";

import SubscribePage from "./pages/SubscribePage";
import DocumentariesPage from "./pages/DocumentariesPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import LogoutPage from "./pages/LogoutPage";
import FooterPage from "./pages/FooterPage";
import ActionMoviesPage from "./pages/ActionMovies";
import PremiumSubscribePage from "./pages/PremiumSub";
import ViewVideoPage from "./pages/ViewVideoPage";
import LoadingFallback from "./pages/LoadingFallback";

// import { HomePage } from "./api/loader";

function App() {
  const { homePage, questionLoader, actionMovies } = ComponentLoaders;

  console.log("ComponentLoaders ", homePage());
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: homePage,
      children: [
        {
          index: true,
          element: <MainPage />,
          loader: questionLoader,
          HydrateFallback: LoadingFallback,
        },
      ],
    },
    {
      path: "/movie/:genre",
      element: <ActionMoviesPage />,
      loader: actionMovies,
    },
  ]);

  return (
    <RouterProvider
      router={router}
      hydrateFallbackElement={<LoadingFallback />}
    />
  );
}

export default App;

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       loader: RootLoader,
//       children: [
//         {
//           index: true,
//           element: <MainPage />,
//           HydrateFallback: LoadingFallback,
//         },
//       ],
//     },
//     { path: "/category", element: <CategoriesPage />, loader: CategoryLoader },
//     {
//       path: "/documentaries",
//       element: <DocumentariesPage />,
//     },

//     { path: "pages", element: <FooterPage /> },
//     { path: "/cart", element: <CartPage /> },
//     { path: "/auth/:type", element: <AuthPage /> },
//     { path: "/logout", element: <LogoutPage /> },
//     {
//       path: "/subscribe",
//       element: <SubscribePage />,
//       loader: RootLoader,
//     },
//     {
//       path: "/subscribe/premium",
//       element: <PremiumSubscribePage />,
//       loader: RootLoader,
//     },
//     {
//       path: "/popular/:name",
//       element: <ViewVideoPage />,
//       loader: RootLoader,
//     },
//     {
//       path: "/latest/:name",
//       element: <ViewVideoPage />,
//       loader: RootLoader,
//     },
//     {
//       path: "/category/:name",
//       element: <ViewVideoPage />,
//       loader: RootLoader,
//     },
//   ]);
