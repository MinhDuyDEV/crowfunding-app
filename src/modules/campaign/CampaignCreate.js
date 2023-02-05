import { Button } from "components/button";
import { IconPlus } from "components/icons";
import React from "react";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignCreate = () => {
  return (
    <div className="flex items-center justify-between px-10 py-8 bg-white rounded-[20px] mb-10">
      <div className="flex-1 max-w-[600px] flex gap-x-6">
        <div className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-secondary bg-opacity-60">
          <IconPlus></IconPlus>
        </div>
        <div className="flex-1">
          <CampaignTitle className="text-[22px] font-semibold mb-2">
            Create Your Campaign
          </CampaignTitle>
          <CampaignDesc className="mb-2 text-sm">
            Jump right into our editor and create your first Virtue campaign!
          </CampaignDesc>
          <p className="text-sm text-primary">Need any help? Learn More...</p>
        </div>
      </div>
      <Button
        type="button"
        className="px-8"
        kind="ghost"
        href="/start-campaign"
      >
        Create campaign
      </Button>
    </div>
  );
};

export default CampaignCreate;
