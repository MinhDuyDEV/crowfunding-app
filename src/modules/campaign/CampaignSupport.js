import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">Support</h2>
      <div className="flex flex-col px-[25px] py-[30px] bg-white w-full shadow-1 rounded-[10px]">
        <p className="text-xl font-medium text-center text-text3 mb-[30px]">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="pledge"
          className="px-5 py-2 text-lg font-medium border border-stroke rounded-[5px] w-full mb-5"
        ></Input>
        <div className="bg-[#F7F7F7] text-sm h-[126px] w-full rounded-[10px] mb-5">
          <div className="p-5">
            <p className="mb-5 font-semibold text-text2">
              Back it because you believe in it.
            </p>
            <p className="pr-5 text-text3">
              Support the project for no reward, just because it speaks to you.
            </p>
          </div>
        </div>
        <Button kind="secondary">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
