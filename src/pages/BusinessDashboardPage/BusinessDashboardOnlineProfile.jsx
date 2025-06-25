import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { ContinueButtonArrowSvg } from "@/components/svgContainer/SvgContainer";
import userImg from "../../../src/assets/images/online-profile/user.png";
import chartImg from "../../../src/assets/images/online-profile/chart.png";
import clientImg from "../../../src/assets/images/online-profile/client.png";
import { Loader } from "@/components/Loader/Loader";


const BusinessDashboardOnlineProfile = () => {
  const { user } = useAuth();

  const steps = [
    {
      id: 1,
      title: "Tell us about your business",
      description:
        "Share some basic info like your venue name, location, and opening hours.",
      imgSrc: userImg,
    },
    {
      id: 2,
      title: "Stand out online",
      description:
        "Add images of your location and select some highlights to make your profile pop.",
      imgSrc: chartImg,
    },
    {
      id: 3,
      title: "Accept online bookings",
      description:
        "With a complete profile, you're ready to start taking online bookings directly.",
      imgSrc: clientImg,
    },
  ];

  const onlineStore = user?.business_profile?.online_store;
  const storeImage =
    user?.business_profile?.online_store?.store_images?.[0]?.images;
  const storeImageUrl = storeImage
    ? `${import.meta.env.VITE_SITE_URL}/${storeImage}`
    : null;

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {onlineStore ? (
        <Link
          to="/businessDashboard/tellusaboutyourbusiness"
          className="max-w-[900px] mx-auto xl:mt-10 block px-5 md:px-0 mt-6 md:mt-0"
        >
          <div className="flex items-center gap-[9px] justify-between">
            <div className="max-w-[771px]">
              <h1 className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.6px]">
                Online profile
              </h1>
              <p className="mt-[9px] text-textColor font-manrope text-sm sm:text-base leading-6">
                View and manage your online profile.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col lg:flex-row justify-between items-center lg:border border-[#DFE1E6] rounded-2xl">
            {storeImageUrl ? (
              <img
                className="xl:w-[340px] lg:w-[300px] w-full xl:h-[207px] h-[200px] object-cover lg:rounded-l-2xl rounded-2xl"
                src={storeImageUrl}
                alt="Store"
              />
            ) : (
              <div className="w-full h-[200px] flex items-center justify-center bg-gray-100 text-gray-400">
                No Image Available
              </div>
            )}
            <div className="xl:pr-8 lg:px-5 xl:px-0 w-full xl:w-[530px] mt-5 lg:mt-0">
              <div className="flex items-start justify-between max-w-[589px]">
                <div className="lg:w-[80%]">
                  <h1 className="text-textColor font-manrope text-lg font-bold leading-[27px]">
                    {onlineStore?.name}
                  </h1>
                  <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                    {onlineStore?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <section className="max-w-[1320px] mx-auto px-5 lg:px-0 mt-5 md:mt-0">
          <div className="flex justify-end gap-4">
            <Link
              to="/businessDashboard/businessContainer"
              className="bg-[#0D1619] text-white text-base px-[18px] py-[10px] rounded-[10px] flex items-center gap-[6px]"
            >
              Continue
              <ContinueButtonArrowSvg />
            </Link>
          </div>

          <div className="3xl:mt-[90px] 2xl:mt-8 lg:mt-11 mt-5 flex flex-col lg:flex-row items-center 2xl:gap-12 xl:gap-5 lg:gap-10 justify-center">
            <div className="xl:max-w-[486px] lg:max-w-[300px] max-w-[500px]">
              <h1 className="text-[#000] font-outfit text-2xl md:text-3xl lg:text-5xl font-semibold xl:leading-[57.6px] lg:leading-[50px]">
                Let’s get you published on the world’s{" "}
                <span className="bg-primary-gradient bg-clip-text text-transparent">
                  most popular marketplace
                </span>{" "}
                to grow your business
              </h1>
            </div>

            <div className="md:mt-8 mt-4 lg:mt-0">
              {steps.map(step => (
                <div key={step.id} className="flex gap-6 2xl:py-8 py-4 lg:px-2">
                  <div>
                    <h1 className="text-textColor font-outfit text-xl md:text-2xl font-semibold leading-[28.8px]">
                      {step.id}. {step.title}
                    </h1>
                    <p className="text-[#757575] font-manrope text-base font-medium leading-6 md:mt-4 max-w-[341px] md:ml-4">
                      {step.description}
                    </p>
                  </div>
                  <div>
                    <img src={step.imgSrc} alt={`Step ${step.id}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BusinessDashboardOnlineProfile;
