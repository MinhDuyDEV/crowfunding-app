import React from "react";

const CampaignImage = ({
  image = "/mainImage.png",
  className = "h-[158px] w-full",
}) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt="img"
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampaignImage;
