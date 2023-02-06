import { IconStar } from "components/icons";
import React from "react";

const CampaignViewAuthor = () => {
  return (
    <div className="flex items-center gap-x-5 mb-[35px]">
      <img
        src="/mixiface.jpg"
        alt="avatar"
        className="object-cover w-[60px] h-[60px] rounded-full"
      />
      <div className="flex flex-col flex-1 gap-y-1">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-medium text-text1">Sackful Islam</h3>
          <div className="flex items-center text-[#F5A623]">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <IconStar key={index}></IconStar>
              ))}
          </div>
        </div>
        <div className="flex items-center text-sm gap-x-3">
          <strong className="font-semibold text-primary">02 Campaign</strong>
          <span className="block rounded-full w-[6px] h-[6px] bg-text3"></span>
          <span className=" text-text3">Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignViewAuthor;
