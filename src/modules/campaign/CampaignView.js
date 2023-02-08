import { Button } from "components/button";
import Heading from "components/common/Heading";
import React, { Fragment } from "react";
import { v4 } from "uuid";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CampaignAmount from "./parts/CampaignAmount";
import CampaignBackers from "./parts/CampaignBackers";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDays from "./parts/CampaignDays";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignViewAuthor from "./parts/CampaignViewAuthor";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover mb-10 bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0) -7.14%, #000000 87.01%), url(/banner.png)`,
        }}
      >
        <h1 className="font-bold text-[40px]">Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignImage className="h-[398px] mb-[30px]"></CampaignImage>
          <div className="flex items-center justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="rounded-[5px] w-[89px] h-[70px] object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampaignCategory
            className="mb-3 text-sm"
            text="Architecture"
          ></CampaignCategory>
          <CampaignTitle className="mb-[15px] text-xl font-bold">
            Meet - AI Virtual Background 4K Webcam
          </CampaignTitle>
          <CampaignDesc className="mb-6 text-sm">
            The first-ever 4K webcam that embedded AI technology to protect your
            background during video calls.
          </CampaignDesc>
          <CampaignViewAuthor></CampaignViewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-center justify-between mb-4 gap-x-5">
            <CampaignAmount
              amount={2000}
              raisedOf={2500}
              size="large"
            ></CampaignAmount>
            <CampaignBackers size="large"></CampaignBackers>
            <CampaignDays></CampaignDays>
          </div>
          <Button kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] p-5 bg-white mb-14 border-b-slate-100">
        <div className="flex items-center gap-x-[60px] font-medium text-text3 text-sm">
          <span>Campaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button kind="primary" className="px-9">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2>Story</h2>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <div>
        <Heading className="mb-10">You also may be interested in</Heading>
        <CampaignGrid type="default">
          {Array(4)
            .fill(0)
            .map((campaign) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
    </Fragment>
  );
};

export default CampaignView;
