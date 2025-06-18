import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import step12Img from "../../../../assets/images/online-profile/step12.png";
import useAuth from "@/hooks/useAuth";
import { useAddOnlineStore } from "@/hooks/cms.mutations";

const OnlineProfileStepTwelve = ({ step, setStep, formData, setFormData }) => {
  const { mutateAsync: addOnlineStore } = useAddOnlineStore();
  const { user } = useAuth();

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
    fd.append("day_name", updatedFormData.day_name);
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

    // Fix for images - handle both file objects and existing file paths
    updatedFormData.images?.forEach((imageObj, index) => {
      if (imageObj instanceof File) {
        fd.append(`images[${index}]`, imageObj);
      } else if (imageObj?.originFileObj) {
        fd.append(`images[${index}]`, imageObj.originFileObj);
      } else if (imageObj?.url) {
        // If it's an existing image URL
        fd.append(`existing_images[${index}]`, imageObj.url);
      }
    });

    try {
      await addOnlineStore(fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Optionally: advance step or show success message
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <section className="px-[18px] xl:px-0 pb-10 lg:pb-0">
      <div className="flex justify-between container mt-9">
        <button onClick={() => setStep(step - 1)}>
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <button
            onClick={handleContinue}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>

      <div className="max-w-[752px] mx-auto mt-5 2xl:mt-0">
        <h1 className="text-textColor font-outfit text-2xl lg:text-3xl xl:text-4xl font-semibold lg:leading-[43.2px]">
          Enable online bookings on Fresha Marketplace
        </h1>

        <figure className="xl:w-[752px] w-full lg:h-[425px] h-[250px] mt-8">
          <img className="w-full h-full object-cover" src={step12Img} alt="" />
        </figure>

        <p className="text-textColor font-manrope text-sm sm:text-base lg:text-lg font-medium leading-[27px] mt-[13px]">
          By enabling online bookings on Fresha, your venue will be uploaded and
          made discoverable to clients through the Fresha marketplace, allowing
          them to book your services directly.{" "}
          <span className="text-[#055AD9]">Learn more</span>
        </p>
      </div>
    </section>
  );
};

export default OnlineProfileStepTwelve;
