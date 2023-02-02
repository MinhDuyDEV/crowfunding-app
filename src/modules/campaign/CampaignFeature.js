import React from "react";
import CampaignAmount from "./parts/CampaignAmount";
import CampaignBackers from "./parts/CampaignBackers";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDays from "./parts/CampaignDays";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampaignImage className="h-[266px] flex-1"></CampaignImage>
      <div className="my-4 flex-1 max-w-[435px]">
        <CampaignCategory
          className="mb-3 text-sm"
          text="Architecture"
        ></CampaignCategory>
        <CampaignTitle className="mb-[15px] text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDesc className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-center justify-between gap-x-16">
          <CampaignAmount
            amount={2000}
            raisedOf={2500}
            size="large"
          ></CampaignAmount>
          <CampaignBackers size="large"></CampaignBackers>
          <CampaignDays></CampaignDays>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
