import React from "react";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignPerk = () => {
  return (
    <div className="bg-white shadow-1 rounded-[10px]">
      <img
        src="/perk.png"
        alt=""
        className="h-[232px] w-full object-cover rounded-[10px]"
      />
      <div className="p-5">
        <span className="inline-block px-3 py-1 mb-5 text-sm font-medium text-white rounded-sm bg-secondary">
          Featured
        </span>
        <CampaignTitle className="text-xl">Special One Camera</CampaignTitle>
        <div className="flex items-center gap-x-[10px] mb-4">
          <span className="text-xl font-bold">$2,724 USD</span>
          <div className="flex text-sm font-medium text-error items-center gap-x-[5px]">
            <span className="line-through">$1,504 USD</span>
            <span>(12% OFF)</span>
          </div>
        </div>
        <div className="flex flex-col mb-[15px]">
          <strong className="text-base font-medium">Estimated Shipping</strong>
          <span className="text-sm text-text2">October 2022</span>
        </div>
        <p className="mb-[15px]">
          <strong className="font-medium">05</strong>
          <span className="text-sm text-text2"> claimed</span>
        </p>
        <p className="text-text2">Ships worldwide</p>
      </div>
    </div>
  );
};

export default CampaignPerk;
