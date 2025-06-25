import { useState, useEffect } from "react";
import { message, Upload } from "antd";
import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
  UploadImageSvg,
} from "@/components/svgContainer/SvgContainer";
const { Dragger } = Upload;

const OnlineProfileStepEight = ({ step, setStep, setFormData }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (images.length >= 3) {
      setError("");
    }
  }, [images]);

  const props = {
    name: "file",
    multiple: true,
    beforeUpload: file => {
      const isImage = file.type === "image/jpeg" || file.type === "image/png";

      if (!isImage) {
        message.error("You can only upload JPG/PNG files!");
        return false;
      }

      setImages(prev => [...prev, file]);
      return false;
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleContinue = () => {
    if (images.length < 3) {
      setError("Please upload at least 3 images.");
      return;
    }

    setFormData(prevData => ({ ...prevData, images }));
    setStep(step + 1);
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="flex justify-between container mt-9">
        <button onClick={() => setStep(step - 1)}>
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <button
            onClick={handleContinue}
            className="bg-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#FFF] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>

      <div className="max-w-[640px] mx-auto mt-5 lg:mt-0">
        <h1 className="text-textColor font-outfit text-3xl xl:text-4xl font-semibold leading-[43.2px]">
          Update venue images
        </h1>
        <p className="text-textColor font-manrope text-sm lg:text-base xl:text-lg font-medium leading-[27px] lg:mt-[13px] mt-2">
          Add at least 3 images of your location to your profile. You can add
          more or make changes later.
        </p>

        <div className="border border-[#E6E7EA] xl:mt-8 mt-4 rounded-xl sm:p-6 p-4">
          <Dragger {...props} fileList={[]}>
            <p className="flex justify-center">
              <UploadImageSvg />
            </p>
            <p className="text-[#181D27] font-manrope text-base xl:text-lg font-medium leading-[27px]">
              Drag and drop your images here
            </p>
            <p className="text-[#181D27] font-manrope text-base font-medium leading-6">
              Or click to browse
            </p>
            <p className="text-textColor font-manrope text-base font-semibold leading-6 mt-[26px]">
              Choose a file
            </p>
          </Dragger>

          {error && (
            <p className="text-red-500 mt-2 font-medium text-sm">{error}</p>
          )}

          {images.length > 0 && (
            <div className="mt-5">
              <h3 className="font-semibold mb-2">Uploaded Files:</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {images.slice(0, 3).map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
                {images.length > 3 && (
                  <li>+ {images.length - 3} more files uploaded</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepEight;
