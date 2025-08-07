import { Outlet, useLoaderData } from "react-router-dom";

import Header from "../components/HomeHeader";
import MainPage from "../pages/Main";
// import FooterPage from "../components/Footer";

export default function Root() {
  const LoadersData = useLoaderData();
  console.log("root loaderDatas", LoadersData);
  return (
    <>
      <Header LoadersData={LoadersData} />
      <main>
        <Outlet context={LoadersData} />
      </main>
      {/* <FooterPage /> */}
    </>
  );
}
