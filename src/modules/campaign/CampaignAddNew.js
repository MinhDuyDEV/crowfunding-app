import useOnChange from "hooks/useOnChange";
import ReactQuill, { Quill } from "react-quill";
import React, { useEffect, useMemo, useState } from "react";
import ImageUploader from "quill-image-uploader";
import ImageUpload from "components/image/ImageUpload";
import FormRow from "components/common/FormRow";
import FormGroup from "components/common/FormGroup";
import DatePicker from "react-date-picker";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { Dropdown } from "components/dropdown";
import { Button } from "components/button";
import { apiURL, imgbbAPI } from "config/config";
import "react-quill/dist/quill.snow.css";
Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education"];

const CampaignAddNew = () => {
  const [content, setContent] = useState("");
  const [filterCountry, setFilterCountry] = useOnChange(500);
  const [countries, setCountries] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { handleSubmit, control, setValue, watch, reset } = useForm({
    mode: onsubmit,
  });
  const getDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const resetValue = () => {
    setStartDate("");
    setEndDate("");
    reset({});
  };
  const handleAddNewCampaign = async (values) => {
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      toast.success("Create new campaign successfully!");
      resetValue();
    } catch (error) {
      toast.error("Can not create new campaign!");
    }
  };
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
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };
  useEffect(() => {
    async function fetchCounties() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCounties();
  }, [filterCountry]);
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
              <Dropdown.Select
                placeholder={getDropdownLabel(
                  "category",
                  "Select the category"
                )}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.length > 0 &&
                  categoriesData.map((category) => (
                    <Dropdown.Option
                      key={category}
                      onClick={() =>
                        handleSelectDropdownOption("category", category)
                      }
                    >
                      <span className="capitalize">{category}</span>
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea control={control} name="short_description"></Textarea>
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
        <FormRow>
          <FormGroup>
            <Label>Featured Image *</Label>
            <ImageUpload
              onChange={setValue}
              name="featured_image"
            ></ImageUpload>
          </FormGroup>
          <FormGroup></FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised Amount *</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="w-full text-left max-w-[387px] text-text3 text-sm mt-3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="w-full max-w-[387px] text-text3 text-sm mt-3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List></Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("country", "Select a country")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd-MM-yyyy"
            ></DatePicker>
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd-MM-yyyy"
            ></DatePicker>
          </FormGroup>
        </FormRow>
        <Button
          type="submit"
          kind="primary"
          className="px-10 mx-auto mt-4 mb-10"
        >
          Submit new campaign
        </Button>
      </form>
    </div>
  );
};

export default CampaignAddNew;
