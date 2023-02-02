import React from "react";

const CampaignBackers = ({ total = 173, size = "small" }) => {
  return (
    <div className="flex flex-col gap-x-1">
      <h4
        className={`text-text2 mb-[2px] ${(size = "small"
          ? "text-sm font-semibold"
          : "text-xl font-bold")}`}
      >
        {total}
      </h4>
      <span
        className={` text-text4 ${(size = "small" ? "text-xs" : "text-base")}`}
      >
        Total backers
      </span>
    </div>
  );
};

export default CampaignBackers;
