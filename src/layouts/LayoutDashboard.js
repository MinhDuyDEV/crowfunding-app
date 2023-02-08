import Overlay from "components/common/Overlay";
import ModalBackProject from "components/modal/ModalBackProject";
import DashboardSideBar from "modules/dashboard/DashboardSideBar";
import DashboardTopBar from "modules/dashboard/DashboardTopBar";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <ModalBackProject></ModalBackProject>
      <Overlay></Overlay>
      <DashboardTopBar></DashboardTopBar>
      <div className="flex items-start gap-x-10">
        <DashboardSideBar></DashboardSideBar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
