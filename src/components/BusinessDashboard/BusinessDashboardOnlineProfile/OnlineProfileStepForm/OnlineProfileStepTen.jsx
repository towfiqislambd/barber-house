import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { useAmenities, useHighlights, useValues } from "@/hooks/cms.queries";
import { useState } from "react";
import clsx from "clsx";

const OnlineProfileStepTen = ({ step, setStep, setFormData }) => {
  const { data: allAmenities } = useAmenities();
  const { data: allHighlights } = useHighlights();
  const { data: allValues } = useValues();

  const [amenities, setAmenities] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [values, setValues] = useState([]);
  const [validationError, setValidationError] = useState("");

  const toggleItem = (id, list, setList) => {
    setList(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (
      amenities.length === 0 &&
      highlights.length === 0 &&
      values.length === 0
    ) {
      setValidationError(
        "Please select at least one Amenity, Highlight, or Value."
      );
      return;
    }

    setValidationError("");
    setFormData(prevData => ({
      ...prevData,
      amenities,
      highlights,
      values,
    }));
    setStep(step + 1);
  };

  return (
    <section className="lg:px-6 px-5 xl:px-0 pb-10 sm:pb-0">
      <div className="flex justify-between container mt-9">
        <button onClick={() => setStep(step - 1)}>
          <LeftSideArrowSvg />
        </button>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <button
            onClick={handleContinue}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] py-[12px] sm:py-0 flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>

      <div className="max-w-[708px] mx-auto lg:mt-[40px] mt-5 font-semibold leading-[43.2px]">
        <div className="lg:mt-12">
          <h1 className="text-textColor font-outfit text-[28px] font-semibold leading-[33.6px]">
            Make your profile stand out
          </h1>
          <p className="text-textLight font-manrope text-sm md:text-base font-medium leading-6 max-w-[608px] mt-3">
            Let cats know what makes your business special by selecting any
            amenities or additional information that are important to you.
            Choose as many as apply.
          </p>
        </div>

        {/* Amenities */}
        <div className="md:mt-8 mt-4 max-w-[800px]">
          <h3 className="text-[#000] font-manrope text-lg font-bold leading-[27px]">
            Amenities
          </h3>
          <div className="flex flex-wrap gap-[10px] mt-4">
            {allAmenities?.map(item => (
              <div
                key={item?.id}
                onClick={() => toggleItem(item.id, amenities, setAmenities)}
                className={clsx(
                  "flex gap-[6px] border px-3 py-1 rounded-[100px] cursor-pointer items-center",
                  amenities.includes(item.id)
                    ? "border-[#0D1619] bg-gray-200 text-[#0D1619]"
                    : "border-[#DFE1E6]"
                )}
              >
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${item?.icon}`}
                  className="w-5 h-5"
                  alt={item.name}
                />
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="md:mt-8 mt-4 max-w-[800px]">
          <h3 className="text-[#000] font-manrope text-lg font-bold leading-[27px]">
            Highlights
          </h3>
          <div className="flex flex-wrap gap-[10px] mt-4">
            {allHighlights?.map(item => (
              <div
                key={item?.id}
                onClick={() => toggleItem(item.id, highlights, setHighlights)}
                className={clsx(
                  "flex gap-[6px] border px-3 py-1 rounded-[100px] cursor-pointer items-center",
                  highlights.includes(item.id)
                    ? "border-[#0D1619] bg-gray-200 text-[#0D1619]"
                    : "border-[#DFE1E6]"
                )}
              >
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${item?.icon}`}
                  className="w-5 h-5"
                  alt={item.name}
                />
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="md:mt-8 mt-4 max-w-[800px]">
          <h3 className="text-[#000] font-manrope text-lg font-bold leading-[27px]">
            Values
          </h3>
          <div className="flex flex-wrap gap-[10px] mt-4">
            {allValues?.map(item => (
              <div
                key={item?.id}
                onClick={() => toggleItem(item.id, values, setValues)}
                className={clsx(
                  "flex gap-[6px] border px-3 py-1 rounded-[100px] cursor-pointer items-center",
                  values.includes(item.id)
                    ? "border-[#0D1619] bg-gray-200 text-[#0D1619]"
                    : "border-[#DFE1E6]"
                )}
              >
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {validationError && (
          <p className="text-red-500 mt-6 text-sm font-medium">
            {validationError}
          </p>
        )}
      </div>
    </section>
  );
};

export default OnlineProfileStepTen;
