import { Outlet, useMatches } from "react-router-dom";

import SideBar from "./SideBar";

function RootPage() {
  const matches = useMatches();

  const sidebarDatas = matches.filter(
    (match) => match.route.element?.type?.name === "SideBarPage"
  )?.data;
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
      <SideBar usersData={sidebarDatas} />
      <Outlet />
    </div>
  );
}

export default RootPage;
