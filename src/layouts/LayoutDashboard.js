import DashboardSideBar from "modules/dashboard/DashboardSideBar";
import DashboardTopBar from "modules/dashboard/DashboardTopBar";
import React from "react";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopBar></DashboardTopBar>
      <div className="flex">
        <DashboardSideBar></DashboardSideBar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
