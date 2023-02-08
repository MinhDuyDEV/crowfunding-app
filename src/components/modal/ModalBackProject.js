import { Button } from "components/button";
import { IconClose } from "components/icons";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignPerk from "modules/campaign/CampaignPerk";
import React from "react";
import ReactModal from "react-modal";

const ModalBackProject = () => {
  return (
    <ReactModal
      isOpen={false}
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center "
      className="modal-content w-full max-w-[521px] bg-white rounded-[20px] outline-none px-10 py-14 relative max-h-[90vh] overflow-y-auto scroll-hidden"
    >
      <button className="absolute z-10 flex items-center justify-center cursor-pointer w-11 h-11 top-3 right-10 text-text2">
        <IconClose></IconClose>
      </button>
      <h2 className="font-bold text-[25px] mb-10 text-center">
        Back this project
      </h2>
      <p className="mb-2 text-sm font-medium text-text2">
        Enter the contribute amount
      </p>
      <input
        placeholder="$10"
        name="amount"
        className="px-5 py-2 text-lg font-medium border border-stroke rounded-[5px] w-full mb-5"
      ></input>
      <p className="mb-5 text-sm text-text3">
        Contribution are not associated with perks
      </p>
      <Button kind="primary" className="px-10 mb-[60px]">
        Continue
      </Button>
      <CampaignGrid type="secondary">
        <CampaignPerk showButton></CampaignPerk>
      </CampaignGrid>
    </ReactModal>
  );
};

export default ModalBackProject;
