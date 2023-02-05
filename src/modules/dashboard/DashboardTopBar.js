import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        </Link>
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button
          type="button"
          className="px-[26px] py-[13px]"
          href="/start-campaign"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <img
          src="/mixiface.jpg"
          alt="crowfunding-app"
          className="object-cover rounded-full h-[52px] w-[52px]"
        />
      </div>
    </div>
  );
};

export default DashboardTopBar;
