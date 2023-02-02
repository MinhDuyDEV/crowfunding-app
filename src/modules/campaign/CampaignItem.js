import React from "react";
import CampaignAmount from "./parts/CampaignAmount";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignBackers from "./parts/CampaignBackers";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignItem = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_4px_rgba(184,_184,_184,_0.03),_0px_6px_12px_rgba(184,_184,_184,_0.02),_0px_12px_20px_rgba(184,_184,_184,_0.03)]">
      <CampaignImage></CampaignImage>
      <div className="py-4 pl-5 pr-10">
        <CampaignCategory></CampaignCategory>
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampaignAmount size="small"></CampaignAmount>
          <CampaignBackers></CampaignBackers>
        </div>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
