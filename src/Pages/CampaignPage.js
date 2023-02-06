import { Button } from "components/button";
import Heading from "components/common/Heading";
import CampaignCreate from "modules/campaign/CampaignCreate";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React, { Fragment } from "react";

const CampaignPage = () => {
  return (
    <Fragment>
      <CampaignCreate></CampaignCreate>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>

      <div className="mt-10 text-center">
        <Button type="button" kind="ghost" className="mx-auto px-14">
          <span>See more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </Button>
      </div>
    </Fragment>
  );
};

export default CampaignPage;
