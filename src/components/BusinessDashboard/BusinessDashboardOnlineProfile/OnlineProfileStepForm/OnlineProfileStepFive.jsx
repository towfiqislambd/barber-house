import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
  ZooSvg,
} from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";

const OnlineProfileStepFive = ({ step, setStep, setFormData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: "Zoo Road, Dhaka, Bangladesh",
    },
  });

  const location = watch("address");
  const [mapUrl, setMapUrl] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [locationError, setLocationError] = useState(""); // For lat/lng validation error

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!location) {
        setMapUrl("");
        setCoordinates({ lat: null, lng: null });
        return;
      }

      try {
        const API_KEY = "AIzaSyDl7ias7CMBPanjqPisVXwhXXVth21Cl5Y"; // Replace with your actual key
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json`,
          {
            params: {
              address: location,
              key: API_KEY,
            },
          }
        );

        if (response.data.status === "OK" && response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry.location;
          setCoordinates({ lat, lng });
          const mapEmbedUrl = `https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${lat},${lng}&zoom=15&maptype=roadmap`;
          setMapUrl(mapEmbedUrl);
          setLocationError("");
        } else {
          setMapUrl("");
          setCoordinates({ lat: null, lng: null });
          setLocationError("Could not find coordinates for this address.");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setMapUrl("");
        setCoordinates({ lat: null, lng: null });
        setLocationError("Error fetching location data.");
      }
    };

    fetchCoordinates();
  }, [location]);

  const onSubmit = data => {
    if (!coordinates.lat || !coordinates.lng) {
      setLocationError(
        "Please enter a valid address so the map can be loaded correctly."
      );
      return;
    }

    setLocationError("");

    const submissionData = {
      ...data,
      latitude: coordinates.lat.toString(),
      longitude: coordinates.lng.toString(),
    };

    setFormData(prevData => ({ ...prevData, ...submissionData }));
    setStep(step + 1);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between container mt-9">
          <button type="button" onClick={() => setStep(step - 1)}>
            <LeftSideArrowSvg />
          </button>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#FFF] flex items-center justify-center gap-[6px]"
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
                {...register("address", { required: "Address is required" })}
              />
              <button className="absolute left-[13px] top-[53%] translate-y-[-50%]">
                <ZooSvg />
              </button>
            </div>

            {/* react-hook-form validation */}
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
            {/* Custom lat/lng validation */}
            {locationError && (
              <p className="text-red-500 text-sm mt-1">{locationError}</p>
            )}
          </div>

          <div className="mt-6 rounded-t-[16px]">
            {mapUrl ? (
              <iframe
                className="w-full max-w-[531px] h-[300px] mx-auto border-0"
                src={mapUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="business location map"
              ></iframe>
            ) : (
              <div className="w-full max-w-[531px] h-[300px] mx-auto border border-gray-300 flex items-center justify-center rounded-t-[16px]">
                <p className="text-gray-500">Loading map...</p>
              </div>
            )}

            <div className="border-b border-l border-r border-[#DFE1E6] max-w-[531px] mx-auto p-4 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <h1 className="text-textColor font-manrope text-sm font-semibold">
                  {location}
                </h1>
              </div>
            </div>

            <h1 className="4xl:ml-[630px] 3xl:ml-[400px] 2xl:ml-[310px] xl:ml-[180px] sm:ml-[170px] ml-2 text-[#757575] font-manrope text-base font-medium leading-6 mt-2">
              Drag the map to adjust the pin position
            </h1>
          </div>
        </div>
      </form>
    </section>
  );
};

export default OnlineProfileStepFive;
