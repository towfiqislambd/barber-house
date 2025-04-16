import { useState } from "react";
import { Link } from "react-router-dom";
import { message, Upload } from "antd";
import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
  UploadImageSvg,
} from "@/components/svgContainer/SvgContainer";

const { Dragger } = Upload;

const OnlineProfileStepEight = ({ step, setStep }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);

  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    beforeUpload: (file) => {
      const isImage = file.type === "image/jpeg" || file.type === "image/png";
      const isLt10MB = file.size / 1024 / 1024 < 10;

      if (!isImage) {
        message.error("You can only upload JPG/PNG files!");
        return false;
      }

      if (!isLt10MB) {
        message.error("Image must be smaller than 10MB!");
        return false;
      }

      // Convert file to preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrls((prevUrls) => [...prevUrls, e.target.result]);
        setIsUploaded(true); // Set uploaded state when images are uploaded
      };
      reader.readAsDataURL(file);

      return true;
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`File uploaded successfully.`);
        setIsUploaded(true);
      } else if (status === "error") {
        message.error(`File upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="flex justify-between container mt-9">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <Link
            onClick={() => setStep(step + 1)}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>

      <div className="max-w-[640px] mx-auto mt-5 lg:mt-0">
        <h1 className="text-textColor font-outfit text-3xl xl:text-4xl font-semibold leading-[43.2px]">
          Update venue images
        </h1>
        <p className="text-textColor font-manrope text-sm lg:text-base xl:text-lg font-medium leading-[27px] lg:mt-[13px] mt-2">
          Add at least 3 images of your location to your profile. You can add
          more or make changes later. Drag and drop to change the order of the
          images.
        </p>

        <div className="border border-[#E6E7EA] xl:mt-8 mt-4 rounded-xl sm:p-6 p-4">
          {/* Hide Dragger when files are uploaded */}
          {!isUploaded && (
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
          )}

          {/* Show this section when files are uploaded */}
          {isUploaded && (
            <div
              className="flex flex-col sm:flex-row justify-between border border-[#DFE1E6] rounded-xl md:p-4 p-2 sm:items-center gap-1 md:gap-0"
              onClick={() => setIsUploaded(false)} // Toggle back to upload state
            >
              <div>
                <p className="text-[#181D27] font-manrope text-sm sm:text-base md:text-lg font-medium leading-[27px]">
                  Drag and drop your images here
                </p>
                <p className="text-[#181D27] font-manrope text-sm sm:text-base font-medium leading-6">
                  Or click to browse
                </p>
              </div>
              <p className="text-textColor text-sm sm:text-base font-semibold leading-6">
                Choose a file
              </p>
            </div>
          )}

          <p className="mt-4 text-[#6C606C] text-sm font-normal leading-5">
            File type jpg, png - minimum dimensions 916 x 500 pixels, max size
            10MB.
          </p>

          {/* Show preview if images are uploaded */}
          {imageUrls.length > 0 && (
            <div className="mt-5 grid grid-cols-1 gap-4">
              {/* First image in a larger size */}
              <div className="flex justify-center">
                <figure className="w-[636px] xl:h-[364px] h-[230px]">
                  <img
                    src={imageUrls[0]}
                    alt={`Uploaded 1`}
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
              {/* Second and third images in a second row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {imageUrls.slice(1, 3).map((url, index) => (
                  <figure
                    key={index}
                    className="lg:w-[300px] w-full xl:h-[245px] h-[220px]"
                  >
                    <img
                      src={url}
                      alt={`Uploaded ${index + 2}`}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepEight;
