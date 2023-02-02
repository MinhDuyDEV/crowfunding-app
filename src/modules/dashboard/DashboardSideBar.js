import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithDraw,
} from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithDraw></IconWithDraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "#",
    onclick: () => {},
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    url: "#",
    onClick: () => {},
  },
];

const DashboardSideBar = () => {
  return (
    <div className="w-full md:w-[76px] bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] rounded-[20px] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className="flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-[20px] md:mb-[30px] text-icon-color last:mt-auto last:bg-white last:mb-0 last:shadow-[10px_10px_20px_rgba(211,_211,_211,_0.25)]"
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSideBar;
