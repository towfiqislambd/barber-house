import { Input } from "../ui/input";
import { useState } from "react";
import {
  AddTaxRetesSvg,
  EditTaxDefaultSvg,
} from "../svgContainer/SvgContainer";
import { Link } from "react-router-dom";

const EditTaxDetails = () => {
  return (
    <section>
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container mt-10">
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Save
        </button>
      </div>
      {/* This is the Client Sources */}
      <div className="max-w-[778px] mx-auto mt-9">
        <p className="text-[#000] font-outfit text-4xl font-semibold">
          Edit tax defaults
        </p>
        <p className="mt-2 text-[#757575] font-manrope text-lg font-medium leading-[27px]">
          Change tax defaults for SR
        </p>

        {/* This is the  */}
        <div className="bg-[#F0F0FF] rounded-[10px] border mt-8 py-6 px-4">
          <div className="flex gap-[9px] items-center">
            <EditTaxDefaultSvg />
            <p className="text-textColor font-manrope text-sm font-semibold leading-6">
              To edit tax defaults you must first set up tax rates for the
              workspace
            </p>
          </div>
          {/* Add tax retes */}
          <Link
            to={"/businessDashboard/addnewtax"}
            className="flex items-center gap-1 ml-12 mt-2"
          >
            <p className="text-textColor font-manrope text-sm font-semibold leading-6">
              Add tax retes
            </p>
            <AddTaxRetesSvg />
          </Link>
        </div>

        {/* Services */}
        <div className="mt-6">
          <label className="text-[#000] font-manrope text-base font-semibold leading-6">
            Services
          </label>
          <Input
            className="h-[55px] mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
            type="text"
            placeholder="SR"
          />
          <p className="mt-1 text-[#757575] font-manrope text-sm font-semibold leading-6">
            You can override this per service
          </p>
        </div>
        {/* Products */}
        <div className="mt-6">
          <label className="text-[#000] font-manrope text-base font-semibold leading-6">
            Products
          </label>
          <Input
            className="h-[55px] mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
            type="text"
            placeholder="No tax"
          />
          <p className="mt-1 text-[#757575] font-manrope text-sm font-semibold leading-6">
            You can override this per product
          </p>
        </div>
      </div>
    </section>
  );
};

export default EditTaxDetails;
