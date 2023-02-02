import React from "react";

const CampaignBackers = ({ total = 173, size = "large" }) => {
  return (
    <div className="flex flex-col gap-x-1">
      <h4
        className={`text-text2 mb-[2px] ${(size = "large"
          ? "text-xl font-bold"
          : "text-sm font-semibold")}`}
      >
        {total}
      </h4>
      <span
        className={` text-text4 ${(size = "large" ? "text-base" : "text-xs")}`}
      >
        Total backers
      </span>
    </div>
  );
};

export default CampaignBackers;
