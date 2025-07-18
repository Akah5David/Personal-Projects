import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function Root() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
