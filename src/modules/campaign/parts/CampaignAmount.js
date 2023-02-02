import React from "react";

const CampaignAmount = ({ amount = 2000, raisedOf = 1900, size = "small" }) => {
  return (
    <div className="flex flex-col gap-x-1">
      <h4
        className={` text-text2 mb-[2px] ${
          size === "small" ? "text-sm font-semibold" : "text-xl font-bold"
        }`}
      >{`$${amount}`}</h4>
      <span
        className={`text-text4 ${size === "small" ? "text-xs" : "text-base"}`}
      >{`Raised of $${raisedOf}`}</span>
    </div>
  );
};

export default CampaignAmount;
