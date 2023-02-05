import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "components/common/FormRow";
import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { Dropdown } from "components/dropdown";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const [content, setContent] = useState("");
  const { handleSubmit, control } = useForm({
    mode: onsubmit,
  });
  const handleAddNewCampaign = (values) => {};
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/from-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div className="px-[66px] py-10 bg-white rounded-xl">
      <div className="flex gap-x-[10px] items-center max-w-[380px] rounded-[10px] mx-auto justify-center px-[59px] py-4 bg-text4 bg-opacity-10 text-[25px] mb-10">
        <h2 className="font-bold text-text2">Start a Campaign</h2>
        <img srcSet="/rocket.png 2x" alt="rocket" />
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              type="text"
              name="title"
              placeholder="Write a title"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Real Estate</Dropdown.Option>
                <Dropdown.Option>Film</Dropdown.Option>
                <Dropdown.Option>Camera Gear</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label htmlFor="description">Short Description *</Label>
          <Textarea control={control} name="description"></Textarea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="story">Story *</Label>
          <ReactQuill
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your story......"
          ></ReactQuill>
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNew;
