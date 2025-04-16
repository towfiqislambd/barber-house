import { Link } from "react-router-dom";
import { LockSvg } from "../svgContainer/SvgContainer";

const ClientSources = () => {
  return (
    <section>
      <div className="flex justify-between items-center sm:gap-20 gap-10">
        <div>
          <p className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.6px]">
            Client sources
          </p>
          <p className="text-textColor font-manrope text-base font-normal leading-6 mt-[9px]">
            Manage sources to track how clients found your business.{" "}
            <span className="text-textColor underline">Learn more.</span>
          </p>
        </div>
        <Link
          to={"/businessDashboard/addclientsources"}
          className="bg-[#1E1E1E] rounded-[10px] text-white py-[10px] px-[18px]"
        >
          Add
        </Link>
      </div>
      {/*  */}
      <div className="border border-[#DFE1E6] mt-8 xl:p-8 p-4 flex items-center justify-between rounded-2xl">
        <div>
          <p className="text-textColor font-manrope text-lg font-bold leading-[27px]">
            Walk-In
          </p>
          <p className="text-[#008C4F] font-manrope text-base font-normal leading-6">
            Active
          </p>
        </div>
        <LockSvg />
      </div>
      {/*  */}
      <div className="border border-[#DFE1E6] mt-8 xl:p-8 p-4 flex items-center justify-between rounded-2xl">
        <div>
          <p className="text-textColor font-manrope text-lg font-bold leading-[27px]">
            Walk-In
          </p>
          <p className="text-[#008C4F] font-manrope text-base font-normal leading-6">
            Active
          </p>
        </div>
        <LockSvg />
      </div>
    </section>
  );
};

export default ClientSources;
