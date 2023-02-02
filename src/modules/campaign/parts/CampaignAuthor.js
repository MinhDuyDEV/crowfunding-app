import React from "react";

const CampaignAuthor = ({
  author = "Mahfuzul Nabil",
  image = "/mixiface.jpg",
}) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        alt="avatar"
        className="object-cover w-8 h-8 rounded-full"
      />
      <div className="flex items-center text-xs gap-x-1">
        <span className="text-text3">by</span>
        <h4 className="font-semibold text-text2">{author}</h4>
      </div>
    </div>
  );
};

export default CampaignAuthor;
