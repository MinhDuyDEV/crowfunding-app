import React from "react";

const CampaignDays = ({ days = 30 }) => {
  return (
    <div className="flex flex-col gap-x-1">
      <h4 className="text-xl mb[2px] font-bold text-text2">{days}</h4>
      <span className="text-base text-text4">Days left</span>
    </div>
  );
};

export default CampaignDays;
