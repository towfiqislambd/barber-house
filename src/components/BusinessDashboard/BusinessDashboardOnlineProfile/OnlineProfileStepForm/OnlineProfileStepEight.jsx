import { useState, useEffect } from "react";
import { message, Upload } from "antd";
import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
  UploadImageSvg,
} from "@/components/svgContainer/SvgContainer";

const { Dragger } = Upload;

const OnlineProfileStepEight = ({ step, setStep, setFormData, details }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  // Populate default images on mount
  useEffect(() => {
    if (details?.store_images?.length > 0) {
      const defaultImages = details.store_images.map(item => ({
        uid: item.id.toString(),
        name: item.images.split("/").pop(),
        url: item.images,
        originFileObj: null, // differentiate from newly added files
        isDefault: true,
      }));
      setImages(defaultImages);
    }
  }, [details]);

  // Validate image count
  useEffect(() => {
    if (images.length >= 3) {
      setError("");
    }
  }, [images]);

  // Remove image handler
  const handleRemoveImage = uid => {
    setImages(prev => prev.filter(img => img.uid !== uid));
  };

  // Upload config
  const props = {
    name: "file",
    multiple: true,
    beforeUpload: file => {
      const isImage = file.type === "image/jpeg" || file.type === "image/png";

      if (!isImage) {
        message.error("You can only upload JPG/PNG files!");
        return false;
      }

      const newFile = {
        uid: Date.now().toString(),
        name: file.name,
        originFileObj: file,
        isDefault: false,
      };

      setImages(prev => [...prev, newFile]);
      return false;
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    fileList: [],
  };

  // Continue to next step
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
        <h1 className="text-textColor font-outfit text-2xl lg:text-4xl font-semibold leading-[43.2px]">
          Update venue images
        </h1>
        <p className="text-textColor font-manrope text-sm lg:text-base xl:text-lg font-medium leading-[27px] lg:mt-[13px] mt-2">
          Add at least 3 images of your location to your profile. You can add
          more or make changes later.
        </p>

        <div className="border border-[#E6E7EA] xl:mt-8 mt-4 rounded-xl sm:p-6 p-4">
          <Dragger {...props}>
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

          {/* Image List */}
          {images.length > 0 && (
            <div className="mt-5">
              <h3 className="font-semibold mb-2">Uploaded Files:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {images.map((file, index) => (
                  <li
                    key={file.uid}
                    className="flex justify-between items-center bg-gray-50 rounded px-3 py-2"
                  >
                    <span className="truncate max-w-[80%]">{file.name}</span>
                    <button
                      type="button"
                      className="text-red-500 text-xs font-semibold"
                      onClick={() => handleRemoveImage(file.uid)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepEight;
