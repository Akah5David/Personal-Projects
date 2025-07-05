import { Outlet, useLoaderData, useMatches } from "react-router-dom";

import SideBarPage from "./SideBar";

function RootPage() {
  const usersData = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: "40px",
        minHeight: "100vh",
        paddingRight: "50px",
        // backgroundColor: "red",
      }}
    >
      <SideBarPage usersData={usersData} />
      <Outlet />
    </div>
  );
}

export default RootPage;

//use is used to return the id, pathname, handle, data, params of the current route to
//  either the parents or the child that wants to use any of those
//whenever we leave that current route, i.e whenever we move away from the url that the
// parent or child route is checking for its match the return value of the useMatches hook

// useMatches
// const matches = useMatches();
//   let usersData = matches.find((match) => match.id === "homepage")?.data;
//   console.log(usersData);
