import axios from "axios";
import { imgbbAPI } from "config/config";
import React from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {}, name }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/from-data",
      },
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Can not upload image to imgbbAPI");
      return;
    }
    const imageObj = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    onChange(name, imageObj);
  };
  return (
    <label className="w-full border border-gray-200 text-text4 border-dashed rounded-xl h-[200px] cursor-pointer flex items-center justify-center">
      <input type="file" className="hidden" onChange={handleUploadImage} />
      <span className="p-5 hover:text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-11 h-11"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      </span>
    </label>
  );
};

export default ImageUpload;
