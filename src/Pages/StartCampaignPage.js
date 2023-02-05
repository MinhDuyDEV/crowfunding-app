import LayoutDashboard from "layouts/LayoutDashboard";
import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React from "react";

const StartCampaignPage = () => {
  return (
    <LayoutDashboard>
      <CampaignAddNew></CampaignAddNew>
    </LayoutDashboard>
  );
};

export default StartCampaignPage;
