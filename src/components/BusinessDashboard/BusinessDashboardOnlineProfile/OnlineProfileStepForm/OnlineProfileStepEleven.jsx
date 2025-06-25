import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link, useNavigate } from "react-router-dom";
import step1Image from "../../../../assets/images/online-profile/step3Img.png";
import { useAddOnlineStore } from "@/hooks/cms.mutations";
import useAuth from "@/hooks/useAuth";

const OnlineProfileStepEleven = ({ step, setStep, formData, setFormData }) => {
  const { mutateAsync: addOnlineStore, isPending } = useAddOnlineStore();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleContinue = async () => {
    const id = user?.business_profile?.id;
    if (!id) return;

    // Update state
    const updatedFormData = {
      ...formData,
      business_profile_id: id,
    };
    setFormData(updatedFormData);

    // Create FormData object
    const fd = new FormData();
    fd.append("name", updatedFormData.name);
    fd.append("about", updatedFormData.about);
    fd.append("phone", updatedFormData.phone);
    fd.append("email", updatedFormData.email);
    // fd.append("day_name", updatedFormData.day_name);
    fd.append("morning_start_time", updatedFormData.morning_start_time);
    fd.append("morning_end_time", updatedFormData.morning_end_time);
    fd.append("evening_start_time", updatedFormData.evening_start_time);
    fd.append("evening_end_time", updatedFormData.evening_end_time);
    fd.append("address", updatedFormData.address);
    fd.append("latitude", updatedFormData.latitude);
    fd.append("longitude", updatedFormData.longitude);
    fd.append("business_profile_id", id);

    // Append array values
    updatedFormData.teams?.forEach(team => fd.append("teams[]", team));
    updatedFormData.day_name?.forEach(name => fd.append("day_name[]", name));
    updatedFormData.services?.forEach(service =>
      fd.append("services[]", service)
    );
    updatedFormData.amenities?.forEach(amenity =>
      fd.append("amenities[]", amenity)
    );
    updatedFormData.highlights?.forEach(highlight =>
      fd.append("highlights[]", highlight)
    );
    updatedFormData.values?.forEach(value => fd.append("values[]", value));

    updatedFormData.images?.forEach((imageObj, index) => {
      if (imageObj instanceof File) {
        fd.append(`images[${index}]`, imageObj);
      } else if (imageObj?.originFileObj) {
        fd.append(`images[${index}]`, imageObj.originFileObj);
      } else if (imageObj?.url) {
        fd.append(`existing_images[${index}]`, imageObj.url);
      }
    });

    try {
      await addOnlineStore(fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/businessDashboard/online-profile");
      window.location.reload();
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <section className="px-[14px] md:px-0">
      <div className="flex justify-between container mt-9">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <Link
            onClick={handleContinue}
            className="bg-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#FFF] flex items-center justify-center gap-[6px]"
          >
            {isPending ? "Submitting..." : "Submit"}
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="container flex flex-col lg:flex-row justify-center items-center mt-6 md:mt-12 lg:mt-36 4xl:mt-[170px] gap-6">
        <img
          className="w-[148px] h-[148px] object-cover"
          src={step1Image}
          alt="Not Found"
        />
        <div>
          <h1 className="text-textColor font-manrope text-base font-medium leading-6">
            Step 3
          </h1>
          <p className="mt-[6px] text-textColor font-outfit text-3xl sm:text-[36px] font-semibold sm:leading-[43.2px]">
            Accept online bookings
          </p>
          <p className="max-w-[608px] sm:mt-6 mt-2 text-textLight font-manrope text-sm sm:text-base font-medium leading-6">
            With a complete profile you are ready to start taking online
            bookings directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepEleven;
