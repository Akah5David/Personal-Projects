import { Outlet, useLoaderData } from "react-router-dom";

import Header from "../components/Header";
import MainPage from "../pages/Main";
// import FooterPage from "../components/Footer";
 
export default function Root() {
  const LoadersData = useLoaderData();
  console.log("root loaderDatas", LoadersData);
  return (
    <>
      <Header />
      <main>
        <MainPage LoadersData={LoadersData} />
        <Outlet />
      </main>
      {/* <FooterPage /> */}
    </>
  );
}
