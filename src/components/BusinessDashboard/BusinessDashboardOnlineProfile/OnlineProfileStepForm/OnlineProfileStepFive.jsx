import { useState, useEffect } from "react";
import axios from "axios";
import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
  ZooSvg,
} from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";

const OnlineProfileStepFive = ({ step, setStep }) => {
  const [location, setLocation] = useState("Zoo Road, Dhaka, Bangladesh");
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!location) return;

      try {
        const API_KEY = "AIzaSyA_G_EhWhTWpRYaE6_kR8txUKUkmZkvNiQ"; // Replace with your actual API key
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json`,
          {
            params: {
              address: location,
              key: API_KEY,
            },
          }
        );

        if (response.data.status === "OK") {
          const { lat, lng } = response.data.results[0].geometry.location;
          setMapUrl(
            `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${lat},${lng}`
          );
        } else {
          console.error("Geocoding error:", response.data.status);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchCoordinates();
  }, [location]);

  return (
    <section>
      <div className="flex justify-between container mt-9">
        <button onClick={() => setStep(step - 1)}>
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <h1 className="mt-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Preview
          </h1>
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <button
            onClick={() => setStep(step + 1)}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>
      <div className="px-5 md:px-0 mb-5 md:mb-0">
        <div className="max-w-[608px] mx-auto mt-5 2xl:mt-0">
          <h1 className="text-textColor font-outfit text-2xl sm:text-3xl lg:text-4xl font-semibold sm:leading-[43.2px] lg:mt-10 mt-5 xl:mt-0">
            Where is your business located
          </h1>
          <p className="text-textLight font-manrope mt-3 text-base font-medium leading-6">
            Where can clients find you? Make sure you adjust the pin to the
            correct location.
          </p>
        </div>
        <div className="flex flex-col max-w-[531px] mx-auto xl:mt-10 mt-5">
          <label className="text-[#000] font-manrope text-lg font-semibold leading-[27px]">
            Location address
          </label>
          <div className="relative mt-2">
            <Input
              className="pr-4 pl-10 sm:h-[56px] h-12"
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="absolute left-[13px] top-[53%] translate-y-[-50%]">
              <ZooSvg />
            </button>
          </div>
        </div>
        <div className="mt-6 rounded-t-[16px]">
          <iframe
            className="w-full max-w-[531px] h-[300px] mx-auto border-0"
            src={mapUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="border-b border-l border-r border-[#DFE1E6] max-w-[531px] mx-auto p-4 rounded-b-2xl">
            <div className="flex justify-between items-center">
              <h1 className="text-textColor font-manrope text-sm font-semibold">
                {location}
              </h1>
              <button className="border border-[#2C2C2C] px-5 py-2 h-[37px] rounded-[100px] text-textColor font-manrope text-sm font-bold leading-[21px]">
                Edit
              </button>
            </div>
          </div>
          <h1 className="4xl:ml-[630px] 3xl:ml-[400px] 2xl:ml-[310px] xl:ml-[180px] sm:ml-[170px] ml-2 text-[#757575] font-manrope text-base font-medium leading-6 mt-2">
            Drag the map to adjust the pin position
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepFive;
