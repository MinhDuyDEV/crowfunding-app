import React from "react";

const CampaignDesc = ({ children = "", className = "mb-4 text-xs" }) => {
  return <p className={`font-normal text-text3 ${className}`}>{children}</p>;
};

export default CampaignDesc;
