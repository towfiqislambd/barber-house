import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { useGetStore, useStoreDetails } from "@/hooks/cms.queries";
import { Loader } from "@/components/Loader/Loader";

const BusinessDashboardOnlineProfile = () => {
  const { user } = useAuth();
  const business_profile_id = user?.business_profile?.id;
  const { data: get_online_store_id } = useGetStore(business_profile_id);
  const { data: storeDetails, isLoading } = useStoreDetails(
    get_online_store_id?.online_store_id
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <Link
      to={"/businessDashboard/tellusaboutyourbusiness"}
      className="max-w-[900px] mx-auto xl:mt-10 block px-5 md:px-0 mt-6 md:mt-0"
    >
      <div className="flex items-center gap-[9px] justify-between">
        <div className="max-w-[771px]">
          <h1 className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.6px]">
            Online profile
          </h1>
          <p className="mt-[9px] text-textColor font-manrope text-sm sm:text-base font-normal leading-6">
            View and manage your online profile.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center lg:border border-[#DFE1E6] rounded-2xl">
        <img
          className="xl:w-[340px] lg:w-[300px] w-full xl:h-[207px] h-[200px] object-cover lg:rounded-l-2xl rounded-2xl"
          src={`${import.meta.env.VITE_SITE_URL}/${
            storeDetails?.store?.store_images[0]?.images
          }`}
          alt="Not Found"
        />
        <div className="xl:pr-8 lg:px-5 xl:px-0 w-full xl:w-[530px] mt-5 lg:mt-0">
          <div className="flex items-start justify-between max-w-[589px]">
            <div className="lg:w-[80%]">
              <h1 className="text-textColor font-manrope text-lg font-bold leading-[27px]">
                {storeDetails?.store?.name}
              </h1>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                {storeDetails?.store?.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BusinessDashboardOnlineProfile;
