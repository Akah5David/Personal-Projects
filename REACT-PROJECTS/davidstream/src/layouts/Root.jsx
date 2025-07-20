import { Outlet, useLoaderData } from "react-router-dom";

import Header from "../components/Header";
import MainPage from "../pages/Main";

export default function Root() {
  const LoadersData = useLoaderData();
  console.log("root loaderDatas", LoadersData);
  return (
    <main>
      <Header />
      <MainPage  LoadersData = {LoadersData}/>
      <Outlet />
    </main>
  );
}
 