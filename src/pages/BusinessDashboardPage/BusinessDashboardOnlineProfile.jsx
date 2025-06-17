import onlineProfileImg from "../../assets/images/online-profile/onlineProfile.png";
import { Link } from "react-router-dom";

const BusinessDashboardOnlineProfile = () => {
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
            View and manage your online profile on Fresha marketplace.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center lg:border border-[#DFE1E6] rounded-2xl">
        <img
          className="xl:w-[340px] lg:w-[300px] w-full xl:h-[207px] h-[200px] object-cover lg:rounded-l-2xl rounded-2xl"
          src={onlineProfileImg}
          alt="Not Found"
        />
        <div className="xl:pr-8 lg:px-5 xl:px-0 w-full xl:w-[530px] mt-5 lg:mt-0">
          <div className="flex items-start justify-between max-w-[589px]">
            <div className="lg:w-[80%]">
              <h1 className="text-textColor font-manrope text-lg font-bold leading-[27px]">
                SR
              </h1>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                No Review yet
              </p>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                Bus Stand, Dhaka (Mirpur), Dhaka Division
              </p>
            </div>

            <button className="bg-[#C8F1BC] px-2 py-1 rounded-[100px] text-[#1F8900] font-manrope text-sm font-semibold leading-6">
              Listed
            </button>
          </div>
          <div className="xl:mt-4 mt-2 flex items-center xl:gap-28 sm:gap-5 gap-2">
            <h1 className="text-[#757575] font-manrope text-xs sm:text-sm font-semibold leading-6">
              Updated Thu 13 Feb, 2025
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BusinessDashboardOnlineProfile;
