// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Root from "./layouts/Root";
// import MainPage from "./pages/Main";
// import CategoryLoader from "./api/loader";
import FooterPage from "./components/Footer";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  function handleSateChange() {
    setState(!state);
  }
  return (
    <main>
      <FooterPage changeState={handleSateChange} />
    </main>
  );
  //   const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Root />,
  //       children: [
  //         { index: true, element: <MainPage />, loader: CategoryLoader },
  //       ],
  //     },
  //   ]);
  //   return <RouterProvider router={router} />;
  // }
}
export default App;
